import {
  ObjectLiteral,
  EntityMetadata,
  FindManyOptions,
  FindOneOptions,
  DataSource,
  EntityTarget,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export abstract class BaseService<M extends ObjectLiteral> {
  protected repository: Repository<M>;
  private metadata: EntityMetadata;
  constructor(private readonly model: EntityTarget<M>, private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository<M>(model);
    this.setMetadata();
  }
  private setMetadata() {
    if (!this.metadata) {
      this.metadata = this.dataSource.getMetadata(this.model);
    }
  }

  protected mapPropertyPathsToColumns(maps: string[]): string[] {
    return this.metadata.mapPropertyPathsToColumns(maps).map((col) => col.databaseName) || [];
  }

  protected async findAll(options?: FindManyOptions<M>) {
    return await this.repository.find(options);
  }
  protected async findByPk(pk: string | object | any, options?: FindOneOptions<M>): Promise<M> {
    const key = typeof pk === 'object' ? pk : { id: pk };
    const entity = await this.repository.findOne({
      where: { ...key },
      ...options,
    });
    if (entity === null) {
      throw new NotFoundException();
    } else return entity;
  }
  private async save(payload): Promise<M> {
    return await this.repository.save(payload);
  }
  protected async create(payload): Promise<M> {
    return await this.save(this.repository.create(payload));
  }
  protected async update(pk: any, payload: any): Promise<M> {
    const entity = await this.findByPk(pk);
    return await this.save(this.repository.merge(entity, payload));
  }
  protected async remove(pk: any | FindOptionsWhere<M>): Promise<void> {
    await this.repository.delete(pk);
  }
}

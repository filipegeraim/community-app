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
  constructor(readonly model: EntityTarget<M>, readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository<M>(model);
  }

  protected async findAll(options?: FindManyOptions<M>) {
    return await this.repository.find(options);
  }
  protected async findByPk(pk: any, options?: FindOneOptions<M>): Promise<M> {
    const entity = await this.repository.findOne({
      where: { id: pk },
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
  protected remove(pk: any | FindOptionsWhere<M>) {
    this.repository.delete(pk);
  }
}

import { ObjectLiteral, FindManyOptions, FindOneOptions, DataSource, EntityTarget, FindOptionsWhere, Repository } from 'typeorm';
export declare abstract class BaseService<M extends ObjectLiteral> {
    private readonly model;
    private readonly dataSource;
    protected repository: Repository<M>;
    private metadata;
    constructor(model: EntityTarget<M>, dataSource: DataSource);
    private setMetadata;
    protected mapPropertyPathsToColumns(maps: string[]): string[];
    protected findAll(options?: FindManyOptions<M>): Promise<M[]>;
    protected findByPk(pk: string | object | any, options?: FindOneOptions<M>): Promise<M>;
    private save;
    protected create(payload: any): Promise<M>;
    protected update(pk: any, payload: any): Promise<M>;
    protected remove(pk: any | FindOptionsWhere<M>): Promise<void>;
}

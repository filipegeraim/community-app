import { DataSource, Table } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class NamingStrategy extends SnakeNamingStrategy {
    foreignKeyName(tableOrName: Table | string, columnNames: string[], referencedTablePath?: string): string;
    primaryKeyName(tableOrName: string | Table, columnNames: string[]): string;
    uniqueConstraintName(tableOrName: string | Table, columnNames: string[]): string;
}
declare const _default: DataSource;
export default _default;
export declare class TypeOrmConfig {
    static config(): TypeOrmModuleOptions;
}

import { Table } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class NamingStrategy extends SnakeNamingStrategy {
  foreignKeyName(tableOrName: Table | string, columnNames: string[], referencedTablePath?: string): string {
    tableOrName = typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
    const name = columnNames.reduce((name, column) => `${name}_${column}`, `${tableOrName}_${referencedTablePath}`);
    return `fk_${name}`;
  }
  primaryKeyName(tableOrName: string | Table, columnNames: string[]): string {
    tableOrName = typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
    return `pk_${tableOrName}`;
  }
  uniqueConstraintName(tableOrName: string | Table, columnNames: string[]): string {
    tableOrName = typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
    return `uq_${tableOrName}_${columnNames.join('_')}`;
  }
}

export class TypeOrmConfig {
  static config(): TypeOrmModuleOptions {
    return {
      autoLoadEntities: true,
      database: process.env.DATABASE,
      type: 'sqlite',
      logging: true,
      synchronize: true,
      namingStrategy: new NamingStrategy(),
    };
  }
}

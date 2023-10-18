"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = exports.NamingStrategy = void 0;
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
class NamingStrategy extends typeorm_naming_strategies_1.SnakeNamingStrategy {
    foreignKeyName(tableOrName, columnNames, referencedTablePath) {
        tableOrName = typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
        const name = columnNames.reduce((name, column) => `${name}_${column}`, `${tableOrName}_${referencedTablePath}`);
        return `fk_${name}`;
    }
    primaryKeyName(tableOrName, columnNames) {
        tableOrName = typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
        return `pk_${tableOrName}`;
    }
    uniqueConstraintName(tableOrName, columnNames) {
        tableOrName = typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
        return `uq_${tableOrName}_${columnNames.join('_')}`;
    }
}
exports.NamingStrategy = NamingStrategy;
class TypeOrmConfig {
    static config() {
        return {
            autoLoadEntities: true,
            database: './src/database/db.sqlite',
            type: 'sqlite',
            logging: true,
            synchronize: true,
            namingStrategy: new NamingStrategy(),
        };
    }
}
exports.TypeOrmConfig = TypeOrmConfig;
//# sourceMappingURL=typeorm.js.map
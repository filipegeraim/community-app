"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = exports.NamingStrategy = void 0;
const typeorm_1 = require("typeorm");
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
const dsOptions = {
    host: 'localhost',
    port: 27017,
    database: 'community',
    type: 'mongodb',
    logging: true,
    synchronize: true,
    namingStrategy: new NamingStrategy(),
};
exports.default = new typeorm_1.DataSource(Object.assign(Object.assign({}, dsOptions), { migrations: ['./migrations/*.js'] }));
class TypeOrmConfig {
    static config() {
        return dsOptions;
    }
}
exports.TypeOrmConfig = TypeOrmConfig;
//# sourceMappingURL=typeorm.js.map
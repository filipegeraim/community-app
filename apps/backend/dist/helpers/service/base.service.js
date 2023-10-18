"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
class BaseService {
    constructor(model, dataSource) {
        this.model = model;
        this.dataSource = dataSource;
        this.repository = dataSource.getRepository(model);
        this.setMetadata();
    }
    setMetadata() {
        if (!this.metadata) {
            this.metadata = this.dataSource.getMetadata(this.model);
        }
    }
    mapPropertyPathsToColumns(maps) {
        return this.metadata.mapPropertyPathsToColumns(maps).map((col) => col.databaseName) || [];
    }
    async findAll(options) {
        return await this.repository.find(options);
    }
    async findByPk(pk, options) {
        const key = typeof pk === 'object' ? pk : { id: pk };
        const entity = await this.repository.findOne(Object.assign({ where: Object.assign({}, key) }, options));
        if (entity === null) {
            throw new common_1.NotFoundException();
        }
        else
            return entity;
    }
    async save(payload) {
        return await this.repository.save(payload);
    }
    async create(payload) {
        return await this.save(this.repository.create(payload));
    }
    async update(pk, payload) {
        const entity = await this.findByPk(pk);
        return await this.save(this.repository.merge(entity, payload));
    }
    async remove(pk) {
        await this.repository.delete(pk);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
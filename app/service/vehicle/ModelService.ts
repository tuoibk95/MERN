import { cx_vhc_modl as ModelVehicle } from "../../entities/vehicle/cx_vhc_modl";
import ModelRepository from "../../repository/vehicle/model/ModelVehicleRepository";

export default interface IModelService {
    getAll(): Promise<Array<ModelVehicle>>
    getOne(id: number): Promise<ModelVehicle>
    create(modelVehicle: ModelVehicle): Promise<ModelVehicle>
    delete(id: number): Promise<ModelVehicle>
    update(id: number, modelVehicle: ModelVehicle): Promise<ModelVehicle>
    findByModelName(modelName: string): Promise<ModelVehicle>
    findByBrandId(brandId: number): Promise<any>
}


export default class ModelService implements IModelService {

    private modelRepositorySql: ModelRepository;

    constructor() {
        this.modelRepositorySql = new ModelRepository();
    }

    public async getAll(): Promise<Array<ModelVehicle>> {
        return await this.modelRepositorySql.getAll();
    }

    public async getOne(id: number): Promise<ModelVehicle> {
        return await this.modelRepositorySql.getOne(id);
    }

    public async create(ModelVehicle: ModelVehicle): Promise<ModelVehicle> {
        return await this.modelRepositorySql.create(ModelVehicle);
    }

    public async delete(id: number): Promise<ModelVehicle> {
        return await this.modelRepositorySql.delete(id);


    }
    public async update(id: number, modelVehicle: ModelVehicle): Promise<ModelVehicle> {
        return await this.modelRepositorySql.update(id, modelVehicle);

    }

    public async findByModelName(modelVehicle: string): Promise<ModelVehicle> {
        return this.modelRepositorySql.findByModelName(modelVehicle)
    }

    public async findByBrandId(idBrand: number): Promise<any> {
        return this.modelRepositorySql.findByBrandId(idBrand);
    }
}
import { cx_vhc_modl as ModelVehicle } from "../../../entities/vehicle/cx_vhc_modl";
import IModelVehicleRepository from "./IModelVehicleRepository";
import { logger } from '../../../utils/Logger';
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class ModelVehicleRepository extends ConnectVehicleSql implements IModelVehicleRepository {

    private modelRepo: Repository<ModelVehicle>;
    constructor() {
        super();
        this.modelRepo =  getConnectionManager().get("chungxe_vehicle").getRepository(ModelVehicle);
    }

    public async getAll(): Promise<Array<ModelVehicle>> {
        return await this.modelRepo.find();
    }

    public async getOne(id: number): Promise<ModelVehicle> {
        return await this.modelRepo.findOne(id);
    }

    public async create(modelVehicle: ModelVehicle): Promise<ModelVehicle> {
        return await this.modelRepo.save(modelVehicle);
    }

    public async delete(id: number): Promise<ModelVehicle> {
        let modelVehicle = await this.getOne(id);
        await this.modelRepo.delete(id);
        return modelVehicle;

    }
    public async update(id: number, modelVehicle: ModelVehicle): Promise<ModelVehicle> {
        let modelUpdate = await this.modelRepo.update(id, modelVehicle);
        return this.getOne(id);
    }

    public async findByModelName(modelName: string): Promise<ModelVehicle> {
        let modelVehicleUpdate = this.modelRepo.findOne({ "vhc_modl_name": modelName })
        return modelVehicleUpdate;
    }

    public async findByBrandId(branId: number): Promise<any> {
        let result = await this.modelRepo.findAndCount({ "vhc_bran_id": branId })

        return result;
    }


    connect(): Promise<Connection[]>{
        return super.connect(); 
    }
   
}
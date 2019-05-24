import { cx_vhc_dgn as DesignVehicle } from "../../../entities/vehicle/cx_vhc_dgn";
import IDesignRepository from "./IDesignRepository";
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class DesignRepository extends ConnectVehicleSql implements IDesignRepository {

    private designRepo: Repository<DesignVehicle>;
    constructor() {
        super();
        this.designRepo = getConnectionManager().get("chungxe_vehicle").getRepository(DesignVehicle);
    }

    public async getAll(): Promise<Array<DesignVehicle>> {
        return await this.designRepo.find();
    }

    public async getOne(id: number): Promise<DesignVehicle> {
        return await this.designRepo.findOne(id);
    }

    public async create(design: DesignVehicle): Promise<DesignVehicle> {
        return await this.designRepo.save(design);
    }

    public async delete(id: number): Promise<DesignVehicle> {
        let design = await this.getOne(id);
        await this.designRepo.delete(id);
        return design;
    }
    public async update(id: number, design: DesignVehicle): Promise<DesignVehicle> {
        let typeVehicleUpdate = await this.designRepo.update(id, design);
        return this.getOne(id);
    }

    public async findByDesignName(name: string): Promise<DesignVehicle> {
        let designUpdate = this.designRepo.findOne({ "vhc_dgn_name": name })
        return designUpdate;
    }

    connect(): Promise<Connection[]>{
        return super.connect(); 
    }
   
}
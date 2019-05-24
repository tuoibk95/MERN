import { cx_vhc_tms as TrandmissionVehicle } from "../../../entities/vehicle/cx_vhc_tms";
import ITransmissionRepository from "./ITransmissionRepository";
import { logger } from '../../../utils/Logger';
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class TransmissionRepository extends ConnectVehicleSql implements ITransmissionRepository {

    private transmissionRepo: Repository<TrandmissionVehicle>;
    constructor() {
        super();
        this.transmissionRepo = getConnectionManager().get("chungxe_vehicle").getRepository(TrandmissionVehicle);
    }

    public async getAll(): Promise<Array<TrandmissionVehicle>> {
        return await this.transmissionRepo.find();
    }

    public async getOne(id: number): Promise<TrandmissionVehicle> {
        return await this.transmissionRepo.findOne(id);
    }

    public async create(transmission: TrandmissionVehicle): Promise<TrandmissionVehicle> {
        return await this.transmissionRepo.save(transmission);
    }

    public async delete(id: number): Promise<TrandmissionVehicle> {
        let transmission = await this.getOne(id);
        await this.transmissionRepo.delete(id);
        return transmission
    }
    public async update(id: number, transmission: TrandmissionVehicle): Promise<TrandmissionVehicle> {
        let typeVehicleUpdate = await this.transmissionRepo.update(id, transmission);
        return this.getOne(id);
    }

    public async findByTransmissionName(name: string): Promise<TrandmissionVehicle> {
        let transmissionUpdate = this.transmissionRepo.findOne({ "vhc_tms_name": name })
        return transmissionUpdate;
    }

    connect(): Promise<Connection[]>{
        return super.connect(); 
    }
   
}
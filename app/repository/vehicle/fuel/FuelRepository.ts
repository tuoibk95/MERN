import { cx_vhc_fuel as FuelVehicle } from "../../../entities/vehicle/cx_vhc_fuel";
import IFuelRepository from "./IFuelRepository";
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class FuelRepository extends ConnectVehicleSql implements IFuelRepository {

    private fuelRepo: Repository<FuelVehicle>;
    constructor() {
        super();
        this.fuelRepo = getConnectionManager().get("chungxe_vehicle").getRepository(FuelVehicle);
    }

    public async getAll(): Promise<Array<FuelVehicle>> {
        return await this.fuelRepo.find();
    }

    public async getOne(id: number): Promise<FuelVehicle> {
        return await this.fuelRepo.findOne(id);
    }

    public async create(fuel: FuelVehicle): Promise<FuelVehicle> {
        return await this.fuelRepo.save(fuel);
    }

    public async delete(id: number): Promise<FuelVehicle> {
        let fuel = await this.getOne(id);
        await this.fuelRepo.delete(id);
        return fuel
    }
    public async update(id: number, fuel: FuelVehicle): Promise<FuelVehicle> {
        let fuelUpdate = await this.fuelRepo.update(id, fuel);
        return this.getOne(id);
    }

    public async findByFuelName(name: string): Promise<FuelVehicle> {
        let fuelUpdate = this.fuelRepo.findOne({ "vhc_fuel_name": name })
        return fuelUpdate;
    }

    // connect(): Promise<Connection[]>{
    //     return super.connect(); 
    // }
   
}
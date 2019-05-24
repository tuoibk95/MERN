import { cx_vhc as Vehicle } from "../../../entities/vehicle/cx_vhc";
import IVehicleRepository from "./IVehicleRepository";
import { Connection, Repository, getConnectionManager, In } from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class VehicleRepository extends ConnectVehicleSql implements IVehicleRepository {

    private vehicleRepo: Repository<Vehicle>;
    constructor() {
        super();
        this.vehicleRepo = getConnectionManager().get("chungxe_vehicle").getRepository(Vehicle);
    }

    public async getAll(): Promise<Array<Vehicle>> {
        return await this.vehicleRepo.find();
    }

    public async getOne(id: number): Promise<Vehicle> {
        return await this.vehicleRepo.findOne(id);
    }

    public async create(vehicle: Vehicle): Promise<Vehicle> {
        await this.vehicleRepo.save(vehicle);
        return await this.findByVehicleName(vehicle.vhc_name)
    }

    public async delete(id: number): Promise<Vehicle> {
        let vehicle = await this.getOne(id);
        await this.vehicleRepo.delete(id);
        return vehicle
    }
    public async update(id: number, vehicle: Vehicle): Promise<Vehicle> {
        await this.vehicleRepo.update(id, vehicle);
        return await this.getOne(id);
    }

    public async findByVehicleName(name: string): Promise<Vehicle> {
        return await this.vehicleRepo.findOne({ "vhc_name": name })

    }

    public async findByVehicleOption(option: any): Promise<any> {
        return  await this.vehicleRepo.findAndCount(option)

    }

    public async  findIdByName(bran_name, modl_name, vhc_name):Promise <Vehicle>{
        return  await this.vehicleRepo.findOne({vhc_bran_name:bran_name,vhc_modl_name: modl_name, vhc_name: vhc_name})
    }


    public async createList(list: Array<Vehicle>): Promise<Array<Vehicle>> {
        let vehicle = this.vehicleRepo.save(list)
        return vehicle;
    }

    public async findIn(list: Array<string>): Promise<Array<Vehicle>> {

        return await this.vehicleRepo.find({ "vhc_name": In(list) })
        
    }
}
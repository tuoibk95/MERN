import { cx_vhc_moto as Vehicle } from "../../../entities/vehicle/cx_vhc_moto";
import IMotoRepository from "./IMotoRepository";
import { Connection, Repository, getConnectionManager } from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class MotoRepository extends ConnectVehicleSql implements IMotoRepository {

    private vehicleRepo: Repository<Vehicle>;
    constructor() {
        super();
        this.vehicleRepo = getConnectionManager().get("chungxe_vehicle").getRepository(Vehicle);
    }

    public async getAll(): Promise<Array<Vehicle>> {
        let type = 1;
        return await this.vehicleRepo.find({ "vhc_type_id": type })
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

    public async findByName(option: any): Promise<any> {
        return  await this.vehicleRepo.findAndCount(option)

    }


    public async createList(list: Array<Vehicle>): Promise<Array<Vehicle>> {
        let vehicle = this.vehicleRepo.save(list)
        return vehicle;
    }

    public async findIdByName(bran_name, vhc_name):Promise <Vehicle>{
        return  await this.vehicleRepo.findOne({vhc_bran_name:bran_name, vhc_name: vhc_name})
    }


}
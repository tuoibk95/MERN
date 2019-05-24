import { cx_vhc as Vehicle } from "../../entities/vehicle/cx_vhc";
import VehicleRepository from "../../repository/vehicle/vehicle/VehicleRepository";
import { find } from "../../../node_modules/cfb/types";
import MotoRepository from "../../repository/vehicle/moto/MotoRepository";

export default interface IVehicleService {
    getAll(): Promise<Array<Vehicle>>
    getOne(id: number): Promise<Vehicle>
    create(vehicle: Vehicle): Promise<Vehicle>
    delete(id: number): Promise<Vehicle>
    update(id: number, vehicle: Vehicle): Promise<Vehicle>
    findByVehicleName(name: string): Promise<Vehicle>
    findByVehicleOption(option: any): Promise<any>
    createList(list: Array<Vehicle>): Promise<Array<Vehicle>>
    findIn(list: string[]): Promise<Array<any>>
}


export default class VehicleService implements IVehicleService {

    private vehicleRepo: VehicleRepository;
    private motoRepo: MotoRepository

    constructor() {
        this.vehicleRepo = new VehicleRepository();
    }

    public async getAll(): Promise<Array<Vehicle>> {
        return await this.vehicleRepo.getAll();
    }

    public async getOne(id: number): Promise<Vehicle> {
        return await this.vehicleRepo.getOne(id);
    }

    public async create(Vehicle: Vehicle): Promise<Vehicle> {
        return await this.vehicleRepo.create(Vehicle);
    }

    public async delete(id: number): Promise<Vehicle> {
        return await this.vehicleRepo.delete(id);


    }
    public async update(id: number, Vehicle: Vehicle): Promise<Vehicle> {
        return await this.vehicleRepo.update(id, Vehicle);

    }

    public async findByVehicleName(name: string): Promise<Vehicle> {
        return await this.vehicleRepo.findByVehicleName(name)
    }

    public async findByVehicleOption(option: any): Promise<any> {
        return await this.vehicleRepo.findByVehicleOption(option);
    }

    public async createList(list: Array<Vehicle>): Promise<Array<Vehicle>> {
        return await this.vehicleRepo.createList(list);
    }
    public async findIn(list: string[]): Promise<Array<Vehicle>> {
        return await this.vehicleRepo.findIn(list);
    }
    public async findIdByName(bran_name, modl_name, vhc_name): Promise<Vehicle> {
        return await this.vehicleRepo.findIdByName(bran_name, modl_name, vhc_name);
    }

}
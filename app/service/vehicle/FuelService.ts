import { cx_vhc_fuel as FuelVehicle } from "../../entities/vehicle/cx_vhc_fuel";
import FuelRepository from "../../repository/vehicle/fuel/FuelRepository";

export default interface IFuelService {
    getAll(): Promise<Array<FuelVehicle>>
    getOne(id: number): Promise<FuelVehicle>
    create(fuel: FuelVehicle): Promise<FuelVehicle>
    delete(id: number): Promise<FuelVehicle>
    update(id: number, fuelVehicle: FuelVehicle): Promise<FuelVehicle>
    findByFuelName(name: string): Promise<FuelVehicle>
}


export default class FuelService implements IFuelService {

    private fuelRepo: FuelRepository;

    constructor() {
        this.fuelRepo = new FuelRepository();
    }

    public async getAll(): Promise<Array<FuelVehicle>> {
        return await this.fuelRepo.getAll();
    }

    public async getOne(id: number): Promise<FuelVehicle> {
        return await this.fuelRepo.getOne(id);
    }

    public async create(fuel: FuelVehicle): Promise<FuelVehicle> {
        return await this.fuelRepo.create(fuel);
    }

    public async delete(id: number): Promise<FuelVehicle> {
        return await this.fuelRepo.delete(id);


    }
    public async update(id: number, fuel: FuelVehicle): Promise<FuelVehicle> {
        return await this.fuelRepo.update(id, fuel);

    }

    public async findByFuelName(name: string): Promise<FuelVehicle> {
        return this.fuelRepo.findByFuelName(name)
    }

}
import { cx_vhc_fuel as FuelVehicle } from "../../../entities/vehicle/cx_vhc_fuel";

export default interface IFuelRepository {
    getAll(): Promise<Array<FuelVehicle>>
    getOne(id: number): Promise<FuelVehicle>
    create(fuel: FuelVehicle):Promise<FuelVehicle>
    delete(id: number): Promise<FuelVehicle>
    update(id: number, fuel: FuelVehicle): Promise<FuelVehicle> 
    findByFuelName(name: string): Promise<FuelVehicle>
}
import { cx_vhc_opt as OptionVehicle } from "../../../entities/vehicle/cx_vhc_opt";
import { create } from "domain";

export default interface IOptionVehicleRepository {
    getAll(): Promise<Array<OptionVehicle>>
    getOne(id: number): Promise<OptionVehicle>
    create(optionVehicle: OptionVehicle):Promise<OptionVehicle>
    delete(id: number): Promise<OptionVehicle>
    update(id: number, optionVehicle: OptionVehicle): Promise<OptionVehicle> 
    findByOptionName(name: string): Promise<OptionVehicle>
    findByPriority(priority: number): Promise<any>
    createList (list:OptionVehicle[]):Promise<OptionVehicle[]>
    findIds(ids: number[]):Promise<OptionVehicle[]>
}
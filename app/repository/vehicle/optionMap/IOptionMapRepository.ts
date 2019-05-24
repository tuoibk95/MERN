import { cx_vhc_opt_map as OptionMap } from "../../../entities/vehicle/cx_vhc_opt_map";


export default interface IOptionMapRepository {
    getAll(): Promise<Array<OptionMap>>
    getOne(id: number): Promise<OptionMap>
    create(optionMap: OptionMap):Promise<OptionMap>
    delete(id: number): Promise<OptionMap>
    update(id: number, optionMap: OptionMap): Promise<OptionMap> 
    findByVehicleId (vehicleId: number):Promise<OptionMap[]>
    findByOptionId(optionId:number):Promise<OptionMap>
    createList(list: OptionMap[]):Promise<OptionMap[]>
}
import { cx_vhc_modl as ModelVehicle } from "../../../entities/vehicle/cx_vhc_modl";

export default interface IModelVehicleRepository {
    getAll(): Promise<Array<ModelVehicle>>
    getOne(id: number): Promise<ModelVehicle>
    create(modelVehicle: ModelVehicle):Promise<ModelVehicle>
    delete(id: number): Promise<ModelVehicle>
    update(id: number, modelVehicle: ModelVehicle): Promise<ModelVehicle> 
    findByModelName(typename: string): Promise<ModelVehicle>
    findByBrandId (typeId: number):Promise<any>
}
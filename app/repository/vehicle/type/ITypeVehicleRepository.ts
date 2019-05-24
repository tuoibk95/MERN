import { cx_vhc_type as TypeVehicle } from "../../../entities/vehicle/cx_vhc_type";

export default interface ITypeVehicleRepository {
    getAll(): Promise<Array<TypeVehicle>>
    getOne(id: number): Promise<TypeVehicle>
    create(typeVehicle: TypeVehicle):Promise<TypeVehicle>
    delete(id: number): Promise<TypeVehicle>
    update(id: number, typeVehicle: TypeVehicle): Promise<TypeVehicle> 
    findByTypeName(typename: string): Promise<TypeVehicle>
}
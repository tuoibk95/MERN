import { cx_vhc_type as TypeVehicle } from "../../entities/vehicle/cx_vhc_type";
import TypeVehicleRepository from "../../repository/vehicle/type/TypeVehicleRepository";
import { setupMaster } from "cluster";

export default interface ITypeVehicleService {
    getAll(): Promise<Array<TypeVehicle>>
    getOne(id: number): Promise<TypeVehicle>
    create(typeVehicle: TypeVehicle):Promise<TypeVehicle>
    delete(id: number): Promise<TypeVehicle>
    update(id: number, typeVehicle: TypeVehicle): Promise<TypeVehicle> 
    findByTypeName(typename: string): Promise<TypeVehicle>
}


export default class TypeVehicleService  implements ITypeVehicleService {

    private typeRepositorySql:TypeVehicleRepository;

    constructor(){
        this.typeRepositorySql = new TypeVehicleRepository();
    }

    public async getAll(): Promise<Array<TypeVehicle>> {
        return await this.typeRepositorySql.getAll();
    }

    public async getOne(id: number): Promise<TypeVehicle> {
        return await this.typeRepositorySql.getOne(id);
    }

    public async create(typeVehicle: TypeVehicle): Promise<TypeVehicle> {
        return await this.typeRepositorySql.create(typeVehicle);
    }

    public async delete(id: number): Promise<TypeVehicle> {
        return await this.typeRepositorySql.delete(id);
       

    }
    public async update(id: number, typeVehicle: TypeVehicle): Promise<TypeVehicle> {
        return await this.typeRepositorySql.update(id, typeVehicle);
       
    }

    public async findByTypeName(typeName: string): Promise<TypeVehicle> {
        return this.typeRepositorySql.findByTypeName(typeName)        
    }

}
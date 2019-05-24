import { cx_vhc_type as TypeVehicle } from "../../../entities/vehicle/cx_vhc_type";
import ITypeVehicleRepository from "./ITypeVehicleRepository";
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class TypeVehicleRepository extends ConnectVehicleSql implements ITypeVehicleRepository {

    private typeVehicleRepository: Repository<TypeVehicle>;
    constructor() {
        super();
        this.typeVehicleRepository = getConnectionManager().get("chungxe_vehicle").getRepository(TypeVehicle);
    }

    public async getAll(): Promise<Array<TypeVehicle>> {
        return await this.typeVehicleRepository.find();
    }

    public async getOne(id: number): Promise<TypeVehicle> {
        return await this.typeVehicleRepository.findOne(id);
    }

    public async create(typeVehicle: TypeVehicle): Promise<TypeVehicle> {
        return await this.typeVehicleRepository.save(typeVehicle);
    }

    public async delete(id: number): Promise<TypeVehicle> {
        let typeVehicle = await this.getOne(id);
        await this.typeVehicleRepository.delete(id);
        return typeVehicle;

    }
    public async update(id: number, typeVehicle: TypeVehicle): Promise<TypeVehicle> {
        let typeVehicleUpdate = await this.typeVehicleRepository.update(id, typeVehicle);
        return this.getOne(id);
    }

    public async findByTypeName(typeName: string): Promise<TypeVehicle> {
        let typeVehicle = this.typeVehicleRepository.findOne({ "vhc_type_name": typeName })
        return typeVehicle;
    }

    // connect(): Promise<Connection[]>{
    //     return super.connect(); 
    // }
   
}
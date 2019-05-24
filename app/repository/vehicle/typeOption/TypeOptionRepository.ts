import { cx_vhc_type_opt as TypeOption } from "../../../entities/vehicle/cx_vhc_type_opt";
import { Connection, Repository } from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";
import ITypeOptionRepository from "./ITypeOptionRepository";
import{getConnectionManager} from 'typeorm'

export default class TypeOptionRepository extends ConnectVehicleSql implements ITypeOptionRepository {

    private typeOptionRepo: Repository<TypeOption>;
    
    constructor() {
        super();
        this.typeOptionRepo = getConnectionManager().get("chungxe_vehicle").getRepository(TypeOption);
    
    }

    public async getAll(): Promise<Array<TypeOption>> {
        return await this.typeOptionRepo.find();
    }

    public async getOne(id: number): Promise<TypeOption> {
        return await this.typeOptionRepo.findOne(id);
    }

    public async create(TypeOption: TypeOption): Promise<TypeOption> {
        return await this.typeOptionRepo.save(TypeOption);
    }

    public async delete(id: number): Promise<TypeOption> {
        let typeOption = await this.getOne(id);
        await this.typeOptionRepo.delete(id);
        return typeOption;

    }
    public async update(id: number, TypeOption: TypeOption): Promise<TypeOption> {
        await this.typeOptionRepo.update(id, TypeOption);
        return this.getOne(id);
    }

    public async findByOptionId(optionId: number): Promise<TypeOption> {
        let typeOption = this.typeOptionRepo.findOne({ "vhc_opt_id": optionId })
        return typeOption;
    }

    public async findByTypeId(typeId: number): Promise<any> {
        let result = await this.typeOptionRepo.find({ "vhc_type_id": typeId })

        return result;
    }


    // connect(): Promise<Connection[]> {
    //     return super.connect();
    // }

}
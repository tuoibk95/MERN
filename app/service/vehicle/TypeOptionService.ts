import { cx_vhc_type_opt as TypeOption } from "../../entities/vehicle/cx_vhc_type_opt";
import TypeOptionRepository from "../../repository/vehicle/typeOption/TypeOptionRepository";

export default interface ITypeOptionService {
    getAll(): Promise<Array<TypeOption>>
    getOne(id: number): Promise<TypeOption>
    create(typeOption: TypeOption):Promise<TypeOption>
    delete(id: number): Promise<TypeOption>
    update(id: number, typeOption: TypeOption): Promise<TypeOption> 
    findByTypeId (typeId: number):Promise<TypeOption>
    findByOptionId(optionId:number):Promise<TypeOption>
}


export default class TypeOptionService  implements ITypeOptionService {

    private typeOptionRepo:TypeOptionRepository;

    constructor(){
        this.typeOptionRepo = new TypeOptionRepository();
    }

    public async getAll(): Promise<Array<TypeOption>> {
        return await this.typeOptionRepo.getAll();
    }

    public async getOne(id: number): Promise<TypeOption> {
        return await this.typeOptionRepo.getOne(id);
    }

    public async create(TypeOption: TypeOption): Promise<TypeOption> {
        return await this.typeOptionRepo.create(TypeOption);
    }

    public async delete(id: number): Promise<TypeOption> {
        return await this.typeOptionRepo.delete(id);
       

    }
    public async update(id: number, TypeOption: TypeOption): Promise<TypeOption> {
        return await this.typeOptionRepo.update(id, TypeOption);
       
    }

    public async findByOptionId(optionId: number): Promise<TypeOption> {
        return this.typeOptionRepo.findByOptionId(optionId)        
    }

    public async findByTypeId (idType:number): Promise<any>{
        return this.typeOptionRepo.findByTypeId(idType);
    }


}
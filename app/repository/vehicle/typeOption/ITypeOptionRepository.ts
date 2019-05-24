import { cx_vhc_type_opt as TypeOption } from "../../../entities/vehicle/cx_vhc_type_opt";

export default interface ITypeOptionRepository {
    getAll(): Promise<Array<TypeOption>>
    getOne(id: number): Promise<TypeOption>
    create(typeOption: TypeOption):Promise<TypeOption>
    delete(id: number): Promise<TypeOption>
    update(id: number, typeOption: TypeOption): Promise<TypeOption> 
    findByTypeId (typeId: number):Promise<TypeOption>
    findByOptionId(optionId:number):Promise<TypeOption>
}
import { cx_part_pay_meth as PartPayMethod } from "../../entities/partner/cx_part_pay_meth";

export default interface IPartPayMethService {
    getAll(): Promise<PartPayMethod[]>;
    getOne(id: number): Promise<PartPayMethod>;
    create(partPayMethod: PartPayMethod): Promise<PartPayMethod>;
    createList(partPayMethod: PartPayMethod[]): Promise<PartPayMethod[]>;
}
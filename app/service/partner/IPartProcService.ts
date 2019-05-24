import { cx_part_proc as PartProcedure } from "../../entities/partner/cx_part_proc";

export default interface IPartProcService {
    getAll(): Promise<PartProcedure[]>;
    getOne(id: number): Promise<PartProcedure>;
    save(partProc: PartProcedure): Promise<PartProcedure>;
    createList(partProc: PartProcedure[]): Promise<PartProcedure[]>
}
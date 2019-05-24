import { cx_proc as Procedure} from "../../entities/partner/cx_proc";

export default interface IProcedureService {
    getAll(): Promise<Procedure[]>;
    getOne(id: number): Promise<Procedure>;
    getProcedureByName(name: string): Promise<Procedure>;
    create(procedure: Procedure): Promise<Procedure>;
    findIds(ids: number[]):Promise<Procedure[]>
}
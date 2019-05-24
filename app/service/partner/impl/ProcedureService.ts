import IProcedureService from "../IProcedureService";
import ProcedureRepository from "../../../repository/partner/ProcRepository";
import { cx_proc as Procedure} from "../../../entities/partner/cx_proc";

export default class ProcedureService implements IProcedureService {
    
    private procedureRepository ;

    constructor(){
        this.procedureRepository = new ProcedureRepository();
    }
    public async getAll(){
        return await this.procedureRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.procedureRepository.getOne(id);
    }

    public async getProcedureByName(name: string) {
        return await this.procedureRepository.findByName(name);
    }

    public async create(procedure: Procedure) {
        return await this.procedureRepository.create(procedure);
    }

    public async findIds(ids: number[]) {
        return await this.procedureRepository.findIds(ids);
    }
}

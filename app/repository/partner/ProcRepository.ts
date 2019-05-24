import {cx_proc as Procedure} from "../../entities/partner/cx_proc"
import { Repository, getConnectionManager } from "typeorm";

export default class ProcedureRepository {
    private proceRepo: Repository<Procedure>;
    constructor() {
        this.proceRepo = getConnectionManager().get("chungxe_partner").getRepository(Procedure);
    }

    public async getAll() {
        return await this.proceRepo.find();
    }
    public async getOne(id: number){
        return await this.proceRepo.findOne({"proc_id": id})
    }
    public async create(proc: Procedure){
        return await this.proceRepo.save(proc);
    }

    public async findByName(name: string){
        return await this.proceRepo.findOne({"proc_name": name});
    }
    
    
}
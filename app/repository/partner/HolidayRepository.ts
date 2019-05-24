import {cx_holi as Holiday} from "../../entities/partner/cx_holi"
import { Repository, getConnectionManager } from "typeorm";

export default class ProcedureRepository {
    private holiRepo: Repository<Holiday>;
    constructor() {
        this.holiRepo = getConnectionManager().get("chungxe_partner").getRepository(Holiday);
    }

    public async getAll() {
        return await this.holiRepo.find();
    }
    public async getOne(id: number){
        return await this.holiRepo.findOne({"holi_id": id})
    }
    public async create(wday: Holiday){
        return await this.holiRepo.save(wday);
    }

    public async findByName(name: string){
        return await this.holiRepo.findOne({"holi_name": name});
    }
    
    
}
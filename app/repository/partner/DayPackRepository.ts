import {cx_day_pack as DayPack} from "../../entities/partner/cx_day_pack";
import { Repository, getConnectionManager } from "typeorm";

export default class ProcedureRepository {
    private dayPackRepo: Repository<DayPack>;
    constructor() {
        this.dayPackRepo = getConnectionManager().get("chungxe_partner").getRepository(DayPack);
    }

    public async getAll() {
        return await this.dayPackRepo.find();
    }
    public async getOne(id: number){
        return await this.dayPackRepo.findOne({"day_pack_id": id})
    }
    public async create(dayPack: DayPack){
        return await this.dayPackRepo.save(dayPack);
    }
    
    public async findByName(name: string){
        return await this.dayPackRepo.findOne({"day_pack_name": name});
    }
    
    
}
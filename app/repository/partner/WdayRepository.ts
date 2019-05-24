import {cx_wday as WeekDay} from "../../entities/partner/cx_wday"
import { Repository, getConnectionManager } from "typeorm";

export default class ProcedureRepository {
    private wdayRepo: Repository<WeekDay>;
    constructor() {
        this.wdayRepo = getConnectionManager().get("chungxe_partner").getRepository(WeekDay);
    }

    public async getAll() {
        return await this.wdayRepo.find();
    }
    public async getOne(id: number){
        return await this.wdayRepo.findOne({"wday_id": id})
    }
    public async create(wday: WeekDay){
        return await this.wdayRepo.save(wday);
    }

    public async findByIndex(index: number){
        return await this.wdayRepo.findOne({"wday_indx": index})
    }

    public async findByName(name: string){
        return await this.wdayRepo.findOne({"wday_name": name});
    }
    
    
}
import {cx_part_wday as PartWeekday} from "../../entities/partner/cx_part_wday"
import { Repository, getConnectionManager } from "typeorm";

export default class PartWeekDayRepository{
    private partWeekDayRepo: Repository<PartWeekday>;
    constructor() {
        this.partWeekDayRepo = getConnectionManager().get("chungxe_partner").getRepository(PartWeekday);
    }

    public async getAll() {
        return await this.partWeekDayRepo.find();
    }
    public async getOne(id: number){
        return await this.partWeekDayRepo.findOne({"part_wday_id": id})
    }
    public async create(partWday: PartWeekday){
        return await this.partWeekDayRepo.save(partWday);
    }
    public async createList(partWday: PartWeekday[]){
        return await this.partWeekDayRepo.save(partWday);
    }
    public async findByPartId(id: number){
        return await this.partWeekDayRepo.find({"part_id": id});
    }
}
import {cx_part_day_pack as PartDayPack} from "../../entities/partner/cx_part_day_pack"
import { Repository, getConnectionManager } from "typeorm";

export default class PartDayPackRepository{
    private partDayPackRepo: Repository<PartDayPack>;
    constructor() {
        this.partDayPackRepo = getConnectionManager().get("chungxe_partner").getRepository(PartDayPack);
    }

    public async getAll() {
        return await this.partDayPackRepo.find();
    }
    public async getOne(id: number){
        return await this.partDayPackRepo.findOne({"part_day_pack_id": id})
    }
    public async create(partDayPack: PartDayPack){
        return await this.partDayPackRepo.save(partDayPack);
    }

}
import {cx_part_pay_meth as PartPayMethod} from "../../entities/partner/cx_part_pay_meth"
import { Repository, getConnectionManager } from "typeorm";

export default class PartPayMethodRepository{
    private partPayMethodRepo: Repository<PartPayMethod>;
    constructor() {
        this.partPayMethodRepo = getConnectionManager().get("chungxe_partner").getRepository(PartPayMethod);
    }

    public async getAll() {
        return await this.partPayMethodRepo.find();
    }
    public async getOne(id: number){
        return await this.partPayMethodRepo.findOne({"part_pay_meth_id": id})
    }
    public async create(partPayMethod: PartPayMethod){
        return await this.partPayMethodRepo.save(partPayMethod);
    }
    public async createList(partPayMethod: PartPayMethod[]){
        return await this.partPayMethodRepo.save(partPayMethod);
    }
    public async findByPartId(id: number){
        return await this.partPayMethodRepo.find({"part_id": id});
    }
}
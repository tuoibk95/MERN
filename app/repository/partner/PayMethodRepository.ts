import {cx_pay_meth as PayMethod} from "../../entities/partner/cx_pay_meth"
import { Repository, getConnectionManager, In } from "typeorm";

export default class PayMethodRepository{
    private paymethodRepo: Repository<PayMethod>;
    constructor() {
        this.paymethodRepo = getConnectionManager().get("chungxe_partner").getRepository(PayMethod);
    }

    public async getAll() {
        return await this.paymethodRepo.find();
    }
    public async getOne(id: number){
        return await this.paymethodRepo.findOne({"pay_meth_id": id})
    }
    public async create(partner: PayMethod){
        return await this.paymethodRepo.save(partner);
    }

    public async findByName(name: string){
        return await this.paymethodRepo.findOne({"pay_meth_name": name});
    }
    public async findIn(ids : number[]){
        return await this.paymethodRepo.find({"pay_meth_id": In(ids) });
    }
    
}
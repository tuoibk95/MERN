import IPayMethodService from "../IPayMethodService";
import PayMethodRepository from "../../../repository/partner/PayMethodRepository";
import {cx_pay_meth as PayMethod} from "../../../entities/partner/cx_pay_meth";

export default class PayMethodService implements IPayMethodService{
    private payMethodRepository;
    constructor(){
        this.payMethodRepository = new PayMethodRepository()
    }
   

    public async getAll(){
        return await this.payMethodRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.payMethodRepository.getOne(id);
    }

    public async getPayMethodByName(name: string) {
        return await this.payMethodRepository.findByName(name);
    }

    public async create(payMethod: PayMethod) {
        return await this.payMethodRepository.create(payMethod);
    }

    public async findIn(id: number[]) {
        return await this.payMethodRepository.findIn(id);
    }
    
}
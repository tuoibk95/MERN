import IPartPayMethodService from "../IPartPayMethService";
import PartPayMethRepository from "../../../repository/partner/PartPayMethRepository";
import { cx_part_pay_meth as PartPayMethod } from "../../../entities/partner/cx_part_pay_meth";

export default class PartPayMethodService implements IPartPayMethodService {
    private partPayMethRepository = new PartPayMethRepository();

    public async getAll() {
        return await this.partPayMethRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.partPayMethRepository.getOne(id);
    }

    public async create(partPayMethod: PartPayMethod) {
        return await this.partPayMethRepository.create(partPayMethod);
    }

    public async createList(partPayMethod: PartPayMethod[]) {
        return await this.partPayMethRepository.createList(partPayMethod);
    }
    public async findByPartId(id: number) {
        return await this.partPayMethRepository.findByPartId(id);
    }
}
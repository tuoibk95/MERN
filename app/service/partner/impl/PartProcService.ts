import IPartProcService from "../IPartProcService";
import PartProcRepository from "../../../repository/partner/PartProcRepository";
import { cx_part_proc as PartProcedure } from "../../../entities/partner/cx_part_proc";

export default class PartProcService implements IPartProcService {
    private  partProcRepository = new PartProcRepository();

    public async getAll() {
        return await this.partProcRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.partProcRepository.getOne(id);
    }

    public async save(partProc: PartProcedure) {
        return await this.partProcRepository.save(partProc);
    }

    public async createList(partProc: PartProcedure[]) {
        return await this.partProcRepository.createList(partProc);
    }

    public async findByPartId(id: number) {
        return await this.partProcRepository.findByPartId(id);
    }

}
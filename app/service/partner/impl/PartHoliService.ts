import IPartHoliService from "../IPartHoliService";
import PartHoliRepository from "../../../repository/partner/PartHoliRepository";
import { cx_part_holi as PartHoli } from "../../../entities/partner/cx_part_holi";

export default class PartHoliService implements IPartHoliService {
    private partHoliRepository = new PartHoliRepository();

    public async getAll() {
        return await this.partHoliRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.partHoliRepository.getOne(id);
    }

    public async create(partHoli: PartHoli) {
        return await this.partHoliRepository.create(partHoli);
    }

    public async createList(partHoli: PartHoli[]) {
        return await this.partHoliRepository.createList(partHoli);
    }

    public async findByPartId(id: number) {
        return await this.partHoliRepository.findByPartId(id);
    }
}
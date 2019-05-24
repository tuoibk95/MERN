import IPartWdayService from "../IPartWdayService"; 
import PartWdayRepository from "../../../repository/partner/PartWdayRepository";
import { cx_part_wday as PartWeekday} from "../../../entities/partner/cx_part_wday";

export default class PartWeekdayService implements IPartWdayService {
    private partWdayRepository = new PartWdayRepository();

    public async getAll() {
        return await this.partWdayRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.partWdayRepository.getOne(id);
    }

    public async create(partWday: PartWeekday) {
        return await this.partWdayRepository.create(partWday)
    }

    public async createList(partWday: PartWeekday[]) {
        return await this.partWdayRepository.createList(partWday)
    }
    public async findByPartId(id: number) {
        return await this.partWdayRepository.findByPartId(id);
    }
}

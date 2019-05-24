import IPartDayPackService from "../IPartDayPackService";
import PartDayPackRepository from "../../../repository/partner/PartDayPackRepository";
import { cx_part_day_pack as PartDayPack} from "../../../entities/partner/cx_part_day_pack";

export default class PartDayPackService implements IPartDayPackService {
    private partDayPackRepository = new PartDayPackRepository();

    public async getAll() {
        return await this.partDayPackRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.partDayPackRepository.getOne(id);
    }

    public async create(partDayPack: PartDayPack) {
        return await this.partDayPackRepository.create(partDayPack);
    }
}
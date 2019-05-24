import IDayPackService from "../IDayPackService";
import DayPackRepository from "../../../repository/partner/DayPackRepository";
import { cx_day_pack as DayPack } from "../../../entities/partner/cx_day_pack";

export default class DayPackService implements IDayPackService {
    private dayPackRepository = new DayPackRepository();

    public async  getAll(){
        return await this.dayPackRepository.getAll();
    }

    public async getDayPackById(id: number) {
        return await this.dayPackRepository.getOne(id);
    }

    public async getDayPackByName(name: string) {
        return await this.dayPackRepository.findByName(name);
    }

    public async create(dayPack: DayPack) {
        return await this.dayPackRepository.create(dayPack);
    }
}
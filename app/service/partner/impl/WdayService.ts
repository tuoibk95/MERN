import IWdayService from "../IWdayService";
import WdayRepository from "../../../repository/partner/WdayRepository";
import { cx_wday as WeekDay } from "../../../entities/partner/cx_wday";

export default class WdayService implements IWdayService {
    private wdayRepository;
    constructor(){
        this.wdayRepository = new WdayRepository();
    }

    public async getAll(){
        return await this.wdayRepository.getAll();
    }

    public async getOne(id: number) {
        return await this.wdayRepository.getOne(id);
    }

    public async getWeekDayByname(name: string) {
        return await this.wdayRepository.findByName(name);
    }

    public async getWeekDayByIndex(index: number) {
        return await this.wdayRepository.findByIndex(index);
    }

    public async create(wday: WeekDay) {
        return await this.wdayRepository.create(wday);
    }
}
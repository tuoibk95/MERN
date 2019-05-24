import IHolidayService from "../IHolidayService";
import HolidayRepository from "../../../repository/partner/HolidayRepository";
import { cx_holi as Holi} from "../../../entities/partner/cx_holi";

export default class HolidayService implements IHolidayService {
    private holidayRepository;
    constructor(){
        this.holidayRepository = new HolidayRepository();

    }

    public async getAll(){
        return await this.holidayRepository.getAll();
    }

    public async getOne(id: number){
        return await this.holidayRepository.getOne(id);
    }

    public async getHoliByName(name: string){
        return await this.holidayRepository.findByName(name);
    }
    
    public async create(holi: Holi) {
        return await this.holidayRepository.create(holi);
    }

}
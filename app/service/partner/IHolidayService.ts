import {cx_holi as Holi} from "../../entities/partner/cx_holi";

export default interface IHolidayService {
    getAll(): Promise<Holi[]>;
    getOne(id: number): Promise<Holi>;
    getHoliByName(name: string): Promise<Holi>;
    create(holi: Holi): Promise<Holi>;   
    // edit(holi: Holi): Promise<Holi>;
}
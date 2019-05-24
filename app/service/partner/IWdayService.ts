import {cx_wday as WeekDay} from "../../entities/partner/cx_wday";

export default interface IWdayService {
    getAll(): Promise<WeekDay[]>;
    getOne(id:number): Promise<WeekDay>;
    getWeekDayByname(name: string): Promise<WeekDay>;
    getWeekDayByIndex(index: number): Promise<WeekDay>;
    create(wday: WeekDay): Promise<WeekDay>;
}
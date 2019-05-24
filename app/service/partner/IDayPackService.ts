import { cx_day_pack as DayPack} from "../../entities/partner/cx_day_pack";

export default interface IDayPackService {
    getAll(): Promise<DayPack[]>;
    getDayPackById(id: number): Promise<DayPack>;
    getDayPackByName(name: string): Promise<DayPack>;
    create(dayPack: DayPack): Promise<DayPack>;
}


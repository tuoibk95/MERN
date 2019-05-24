import { cx_part_wday as PartWeekday } from "../../entities/partner/cx_part_wday";

export default interface IPartWdayService {
    getAll():Promise<PartWeekday[]>;
    getOne(id: number): Promise<PartWeekday>;
    create(partWday: PartWeekday): Promise<PartWeekday>;
    createList(partWday: PartWeekday[]): Promise<PartWeekday[]>;
}
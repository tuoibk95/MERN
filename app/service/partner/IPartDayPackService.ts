import { cx_part_day_pack as PartDayPack} from "../../entities/partner/cx_part_day_pack";

export default interface IPartDayPackService {
    getAll(): Promise<PartDayPack[]>;
    getOne(id: number): Promise<PartDayPack>;
    create(partDayPack: PartDayPack): Promise<PartDayPack>;
}
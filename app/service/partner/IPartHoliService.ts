import { cx_part_holi as PartHoli } from "../../entities/partner/cx_part_holi";

export default interface IPartHoliService {
    getAll(): Promise<PartHoli[]>;
    getOne(id: number): Promise<PartHoli>;
    create(partHoli: PartHoli): Promise<PartHoli>;
    createList(partHoli: PartHoli[]): Promise<PartHoli[]>;
}
import {cx_part as Partner} from "../../entities/partner/cx_part"
import PartnerReqDTO from "../../dto/partner/PartnerReqDTO";

export default interface IPartnerService{
    getPartners(): Promise<Partner[]>;
    getPartnerById(id: number): Promise<Partner>;
    getPartnerByName(name: string): Promise<Partner>;
    getPartnerByEmail(email: string): Promise<Partner>;
    getPartnerByPhone(phone: string): Promise<Partner>;
    createPartner(partner: Partner): Promise<Partner>;
    findByOptions(options:any):Promise<any>;
}
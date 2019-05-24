import IPartnerService from "../IPartnerService";
import { cx_part as Partner } from "../../../entities/partner/cx_part"
import PartnerRepository from "../../../repository/partner/PartnerRepository";
import CityRepository from "../../../repository/partner/CityRepository";
import ProcRepository from "../../../repository/partner/ProcRepository";
import PartProcRepository from "../../../repository/partner/PartProcRepository";
import PayMethodRepository from "../../../repository/partner/PayMethodRepository";
import WdayRepository from "../../../repository/partner/WdayRepository";
import HolidayRepository from "../../../repository/partner/HolidayRepository";
import DayPackRepository from "../../../repository/partner/DayPackRepository";
import PartnerReqDTO from "../../../dto/partner/PartnerReqDTO";
import PartnerResDTO from "../../../dto/partner/PartnerResDTO";
import { cx_part_proc } from "../../../entities/partner/cx_part_proc";
import { cx_proc } from "../../../entities/partner/cx_proc";
import { cx_city } from "../../../entities/partner/cx_city";

export default class PartnerService implements IPartnerService {

    private partnerRepository = new PartnerRepository();
    private cityRepository = new CityRepository();
    private procRepository = new ProcRepository();
    private payMethodRepository = new PayMethodRepository();
    private wdayRepository = new WdayRepository();
    private holiRepository = new HolidayRepository();
    private dayPackRepository = new DayPackRepository();
    private partProcRepo = new PartProcRepository();


    public async getPartners() {
        return await this.partnerRepository.getAll();
    }
    public async getPartnerById(id: number) {
        return await this.partnerRepository.getOne(id)
    }
    public async getPartnerByName(name: string): Promise<Partner> {
        return await this.partnerRepository.findByName(name);
    }

    public async getPartnerByEmail(email: string): Promise<Partner> {
        return await this.partnerRepository.findByEmail(email);
    }
    public async getPartnerByPhone(phone: string): Promise<Partner> {
        return await this.partnerRepository.findByPhone(phone);
    }

    public async createPartner(partner: Partner): Promise<Partner> {
        await this.partnerRepository.save(partner);
        return await this.getPartnerByName(partner.part_name);
    }

    public async findByOptions(options: any): Promise<any>{
        return await this.partnerRepository.findByOptions(options)
    }

    
}


import { cx_part as Partner } from "../../entities/partner/cx_part"
import { Repository, getConnectionManager } from "typeorm";

export default class PartnerRepository {
    private partnerRepository: Repository<Partner>;
    constructor() {
        this.partnerRepository = getConnectionManager().get("chungxe_partner").getRepository(Partner);
    }

    public async getAll() {
        return await this.partnerRepository.find();
    }
    public async getOne(id: number) {
        return await this.partnerRepository.findOne({ "part_id": id })
    }
    public async save(partner: Partner) {
        await this.partnerRepository.save(partner);
        return await this.findByName(partner.part_name);
    }

    public async findByName(name: string) {
        return await this.partnerRepository.findOne({ "part_name": name });
    }

    public async findByEmail(email: string) {
        return await this.partnerRepository.findOne({ "part_emai": email })
    }

    public async findByPhone(phone: string) {
        return await this.partnerRepository.findOne({ "part_phon": phone });
    }

    public async findByOptions(options: any) {
        return await this.partnerRepository.findAndCount(options);
    }

}
import { cx_vhc_bran as BrandVehicle } from "../../../entities/vehicle/cx_vhc_bran";
import { logger } from '../../../utils/Logger';
import { Connection, Repository } from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";
import IBrandRepository from "./IBrandRepository";
import{getConnectionManager} from 'typeorm'

export default class BrandRepository extends ConnectVehicleSql implements IBrandRepository {

    private brandRepo: Repository<BrandVehicle>;
    
    constructor() {
        super();
        this.brandRepo = getConnectionManager().get("chungxe_vehicle").getRepository(BrandVehicle);
    
    }

    public async getAll(): Promise<Array<BrandVehicle>> {
        return await this.brandRepo.find();
    }

    public async getOne(id: number): Promise<BrandVehicle> {
        return await this.brandRepo.findOne(id);
    }

    public async create(brandVehicle: BrandVehicle): Promise<BrandVehicle> {
        return await this.brandRepo.save(brandVehicle);
    }

    public async delete(id: number): Promise<BrandVehicle> {
        let brandVehicle = await this.getOne(id);
        await this.brandRepo.delete(id);
        return brandVehicle;

    }
    public async update(id: number, brandVehicle: BrandVehicle): Promise<BrandVehicle> {
        await this.brandRepo.update(id, brandVehicle);
        return this.getOne(id);
    }

    public async findByBrandName(brandName: string): Promise<BrandVehicle> {
        let branhchUpdate = this.brandRepo.findOne({ "vhc_bran_name": brandName })
        return branhchUpdate;
    }

    public async findByTypeId(typeId: number): Promise<any> {
        let result = await this.brandRepo.find({ "vhc_type_id": typeId })

        return result;
    }


    // connect(): Promise<Connection[]> {
    //     return super.connect();
    // }

}
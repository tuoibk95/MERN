import { cx_vhc_part as VehiclePartner } from "../../entities/partner/cx_vhc_part"
import { Repository, getConnectionManager, In, Between } from "typeorm";

export default class ProcedureRepository {
    private vehicleRepo: Repository<VehiclePartner>;
    constructor() {
        this.vehicleRepo = getConnectionManager().get("chungxe_partner").getRepository(VehiclePartner);
    }


    public async getAll(): Promise<Array<VehiclePartner>> {
        return await this.vehicleRepo.find();
    }

    public async getOne(id: number): Promise<VehiclePartner> {
        return await this.vehicleRepo.findOne(id);
    }

    public async create(vehicle: VehiclePartner): Promise<VehiclePartner> {
        await this.vehicleRepo.save(vehicle);
        return await this.findByVehicleName(vehicle.vhc_part_name)
    }

    public async delete(id: number): Promise<VehiclePartner> {
        let vehicle = await this.getOne(id);
        await this.vehicleRepo.delete(id);
        return vehicle
    }
    public async update(id: number, vehicle: VehiclePartner): Promise<VehiclePartner> {
        await this.vehicleRepo.update(id, vehicle);
        return await this.getOne(id);
    }

    public async findByVehicleName(name: string): Promise<VehiclePartner> {
        return await this.vehicleRepo.findOne({ "vhc_part_name": name })

    }

    public async findByVehicleOption(option: any): Promise<any> {
        return await this.vehicleRepo.find(option);

    }


    public async createList(list: Array<VehiclePartner>): Promise<Array<VehiclePartner>> {
        let vehicle = await this.vehicleRepo.save(list)
        return vehicle;
    }

    public async findVehicles(vehicleIds: number[], partnerIds: number[], price_from: number, price_to: number): Promise<any> {
        let obj = {};
        obj ["vhc_part_hide"] = 0;
        if (vehicleIds.length > 0)
            obj["vhc_id"] = In(vehicleIds);
        else 
            return []
        if (partnerIds.length > 0)
            obj["part_id"] = In(partnerIds);
        else
            return 0;
        if (price_from && price_to)
            obj["vhc_part_defa_prie"] = Between(price_from, price_to)
        let vehicle = await this.vehicleRepo.findAndCount(obj)
        return vehicle;
    }





}
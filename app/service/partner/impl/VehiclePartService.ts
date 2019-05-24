import { cx_vhc_part as VehiclePartner } from "../../../entities/partner/cx_vhc_part";
import VehicleRepository from "../../../repository/partner/VehiclePartRepository";
import IVehiclePartService from "../IVehiclePartService"

export default class VehicleService  implements IVehiclePartService {

    private vehicleRepo:VehicleRepository;

    constructor(){
        this.vehicleRepo = new VehicleRepository();
    }

    public async getAll(): Promise<Array<VehiclePartner>> {
        return await this.vehicleRepo.getAll();
    }

    public async getOne(id: number): Promise<VehiclePartner> {
        return await this.vehicleRepo.getOne(id);
    }

    public async create(vehicle: VehiclePartner): Promise<VehiclePartner> {
        return await this.vehicleRepo.create(vehicle);
    }

    public async delete(id: number): Promise<VehiclePartner> {
        return await this.vehicleRepo.delete(id);
       

    }
    public async update(id: number, vehicle: VehiclePartner): Promise<VehiclePartner> {
        return await this.vehicleRepo.update(id, vehicle);
       
    }

    public async findByVehicleName(name: string):  Promise<VehiclePartner> {
        return await this.vehicleRepo.findByVehicleName(name)        
    }

    public async findByVehicleOption (option: any): Promise<any>{
        return await this.vehicleRepo.findByVehicleOption(option);
    }

    public async createList (list: Array<VehiclePartner>): Promise<Array<VehiclePartner>>{
        return  await this.vehicleRepo.createList(list);
    }
    public async  findVehicles(vehicleIds: number[], partnerIds: number[], price_from: number, price_to: number): Promise<any> {
            return await this.vehicleRepo.findVehicles(vehicleIds,partnerIds,price_from,price_to);
    }
}
import { cx_vhc_moto as Vehicle } from "../../entities/vehicle/cx_vhc_moto";
import MotoRepository from "../../repository/vehicle/moto/MotoRepository";

export default interface IMotoService {
    getAll(): Promise<Array<Vehicle>>
    getOne(id: number): Promise<Vehicle>
    create(vehicle: Vehicle):Promise<Vehicle>
    delete(id: number): Promise<Vehicle>
    update(id: number, vehicle: Vehicle): Promise<Vehicle> 
    findByVehicleName(name: string): Promise<Vehicle>
    findByVehicleOption(option: any): Promise<any>
    createList(list: Array<Vehicle>):Promise<Array<Vehicle>>
}


export default class MotoService  implements IMotoService {

    private motoRepo:MotoRepository;

    constructor(){
        this.motoRepo = new MotoRepository();
    }

    public async getAll(): Promise<Array<Vehicle>> {
        return await this.motoRepo.getAll();
    }

    public async getOne(id: number): Promise<Vehicle> {
        return await this.motoRepo.getOne(id);
    }

    public async create(Vehicle: Vehicle): Promise<Vehicle> {
        return await this.motoRepo.create(Vehicle);
    }

    public async delete(id: number): Promise<Vehicle> {
        return await this.motoRepo.delete(id);
       

    }
    public async update(id: number, Vehicle: Vehicle): Promise<Vehicle> {
        return await this.motoRepo.update(id, Vehicle);
       
    }

    public async findByVehicleName(name: string): Promise<Vehicle> {
        return await this.motoRepo.findByVehicleName(name)        
    }

    public async findByVehicleOption (option: any): Promise<any>{
        return await this.motoRepo.findByVehicleOption(option);
    }

    public async createList (list: Array<Vehicle>): Promise<Array<Vehicle>>{
        return  await this.motoRepo.createList(list);
    }
    public async findIdByName(bran_name, vhc_name): Promise<Vehicle> {
        return await this.motoRepo.findIdByName(bran_name, vhc_name);
    }
}
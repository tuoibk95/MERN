import { cx_vhc_tms as TransmissionVehicle } from "../../entities/vehicle/cx_vhc_tms";
import TransmissionRepository from "../../repository/vehicle/transmission/TransmissionRepository";
import { setupMaster } from "cluster";

export default interface ITransmissionService {
    getAll(): Promise<Array<TransmissionVehicle>>
    getOne(id: number): Promise<TransmissionVehicle>
    create(transmission: TransmissionVehicle):Promise<TransmissionVehicle>
    delete(id: number): Promise<TransmissionVehicle>
    update(id: number, transVehicle: TransmissionVehicle): Promise<TransmissionVehicle> 
    findByTransmissionName(name: string): Promise<TransmissionVehicle>
}


export default class TransmissionService  implements ITransmissionService {

    private transmissionRepo:TransmissionRepository;

    constructor(){
        this.transmissionRepo = new TransmissionRepository();
    }

    public async getAll(): Promise<Array<TransmissionVehicle>> {
        return await this.transmissionRepo.getAll();
    }

    public async getOne(id: number): Promise<TransmissionVehicle> {
        return await this.transmissionRepo.getOne(id);
    }

    public async create(transmission: TransmissionVehicle): Promise<TransmissionVehicle> {
        return await this.transmissionRepo.create(transmission);
    }

    public async delete(id: number): Promise<TransmissionVehicle> {
        return await this.transmissionRepo.delete(id);
       

    }
    public async update(id: number, transmission: TransmissionVehicle): Promise<TransmissionVehicle> {
        return await this.transmissionRepo.update(id, transmission);
       
    }

    public async findByTypeName(name: string): Promise<TransmissionVehicle> {
        return this.transmissionRepo.findByTransmissionName(name)        
    }

}
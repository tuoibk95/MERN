import { cx_vhc_seat as SeatVehicle } from "../../entities/vehicle/cx_vhc_seat";
import SeatRepository from "../../repository/vehicle/seat/SeatRepository";
import { setupMaster } from "cluster";

export default interface ISeatService {
    getAll(): Promise<Array<SeatVehicle>>
    getOne(id: number): Promise<SeatVehicle>
    create(seatVehicle: SeatVehicle):Promise<SeatVehicle>
    delete(id: number): Promise<SeatVehicle>
    update(id: number, seatVehicle: SeatVehicle): Promise<SeatVehicle> 
    findBySeatNumber(name: number): Promise<SeatVehicle>
}


export default class SeatService  implements ISeatService {

    private seatRepo:SeatRepository;

    constructor(){
        this.seatRepo = new SeatRepository();
    }

    public async getAll(): Promise<Array<SeatVehicle>> {
        return await this.seatRepo.getAll();
    }

    public async getOne(id: number): Promise<SeatVehicle> {
        return await this.seatRepo.getOne(id);
    }

    public async create(seat: SeatVehicle): Promise<SeatVehicle> {
        return await this.seatRepo.create(seat);
    }

    public async delete(id: number): Promise<SeatVehicle> {
        return await this.seatRepo.delete(id);
       

    }
    public async update(id: number, seat: SeatVehicle): Promise<SeatVehicle> {
        return await this.seatRepo.update(id, seat);
       
    }

    public async findBySeatNumber(name: number): Promise<SeatVehicle> {
        return this.seatRepo.findBySeatNumber(name)        
    }

}
import { cx_vhc_seat as SeatVehicle } from "../../../entities/vehicle/cx_vhc_seat";
import ISeatRepository from "./ISeatRepository";
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class SeatRepo extends ConnectVehicleSql implements ISeatRepository {

    private seatRepo: Repository<SeatVehicle>;
    constructor() {
        super();
        this.seatRepo = getConnectionManager().get("chungxe_vehicle").getRepository(SeatVehicle);
    }

    public async getAll(): Promise<Array<SeatVehicle>> {
        return await this.seatRepo.find();
    }

    public async getOne(id: number): Promise<SeatVehicle> {
        return await this.seatRepo.findOne(id);
    }

    public async create(seatVehicle: SeatVehicle): Promise<SeatVehicle> {
        return await this.seatRepo.save(seatVehicle);
    }

    public async delete(id: number): Promise<SeatVehicle> {
        let seatVehicle = await this.getOne(id);
        await this.seatRepo.delete(id);
        return seatVehicle;

    }
    public async update(id: number, seatVehicle: SeatVehicle): Promise<SeatVehicle> {
        let seatUpdate = await this.seatRepo.update(id, seatVehicle);
        return this.getOne(id);
    }

    public async findBySeatNumber(number: number): Promise<SeatVehicle> {
        let seatUpdate = this.seatRepo.findOne({ "vhc_seat_num": number })
        return seatUpdate;
    }

    connect(): Promise<Connection[]>{
        return super.connect(); 
    }
   
}
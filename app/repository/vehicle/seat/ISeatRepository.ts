import { cx_vhc_seat as SeatVehicle } from "../../../entities/vehicle/cx_vhc_seat";

export default interface ISeatRepository {
    getAll(): Promise<Array<SeatVehicle>>
    getOne(id: number): Promise<SeatVehicle>
    create(seat: SeatVehicle):Promise<SeatVehicle>
    delete(id: number): Promise<SeatVehicle>
    update(id: number, seat: SeatVehicle): Promise<SeatVehicle> 
    findBySeatNumber(seatNumber: number): Promise<SeatVehicle>
}
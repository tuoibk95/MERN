import { cx_vhc_tms as TransmissionVehicle } from "../../../entities/vehicle/cx_vhc_tms";

export default interface ITransmissionRepository {
    getAll(): Promise<Array<TransmissionVehicle>>
    getOne(id: number): Promise<TransmissionVehicle>
    create(transmission: TransmissionVehicle):Promise<TransmissionVehicle>
    delete(id: number): Promise<TransmissionVehicle>
    update(id: number, transmission: TransmissionVehicle): Promise<TransmissionVehicle> 
    findByTransmissionName(name: string): Promise<TransmissionVehicle>
}
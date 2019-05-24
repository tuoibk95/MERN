import {cx_vhc_part as VehiclePart} from '../../entities/partner/cx_vhc_part'

export default interface IVehiclePartService {
    getAll(): Promise<Array<VehiclePart>>
    getOne(id: number): Promise<VehiclePart>
    create(vehicle: VehiclePart):Promise<VehiclePart>
    delete(id: number): Promise<VehiclePart>
    update(id: number, vehicle: VehiclePart): Promise<VehiclePart> 
    findByVehicleName(name: string): Promise<VehiclePart>
    findByVehicleOption(option: any): Promise<any>
    createList(list: Array<VehiclePart>):Promise<Array<VehiclePart>> 
    findVehicles(vehicleIds: number[], partnerIds: number[], price_from: number, price_to: number): Promise<any> 
    
}
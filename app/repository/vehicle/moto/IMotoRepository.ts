import{cx_vhc_moto as Vehicle} from  '../../../entities/vehicle/cx_vhc_moto'

export default interface IVehicleRepository{
    getAll(): Promise<Array<Vehicle>>
    getOne(id: number): Promise<Vehicle>
    create(vehicle: Vehicle):Promise<Vehicle>
    createList(list: Array<Vehicle>): Promise<Array<Vehicle>>
    delete(id: number): Promise<Vehicle>
    update(id: number, vehicle: Vehicle): Promise<Vehicle> 
    findByVehicleName(name: string): Promise<Vehicle>
    findByVehicleOption(option: any): Promise<any>
}
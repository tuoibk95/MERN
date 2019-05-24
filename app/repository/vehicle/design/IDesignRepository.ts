import { cx_vhc_dgn as DesignVehicle } from "../../../entities/vehicle/cx_vhc_dgn";

export default interface IDesignRepository {
    getAll(): Promise<Array<DesignVehicle>>
    getOne(id: number): Promise<DesignVehicle>
    create(designVehicle: DesignVehicle):Promise<DesignVehicle>
    delete(id: number): Promise<DesignVehicle>
    update(id: number, designVehicle: DesignVehicle): Promise<DesignVehicle> 
    findByDesignName(name: string): Promise<DesignVehicle>
}
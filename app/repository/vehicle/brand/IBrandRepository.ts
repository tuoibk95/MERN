import { cx_vhc_bran as BrandVehicle } from "../../../entities/vehicle/cx_vhc_bran";

export default interface IBrandRepository {
    getAll(): Promise<Array<BrandVehicle>>
    getOne(id: number): Promise<BrandVehicle>
    create(brandVehicle: BrandVehicle):Promise<BrandVehicle>
    delete(id: number): Promise<BrandVehicle>
    update(id: number, brandVehicle: BrandVehicle): Promise<BrandVehicle> 
    findByBrandName(brandName: string): Promise<BrandVehicle>
    findByTypeId (typeId: number):Promise<any>
}
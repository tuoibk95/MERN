import { cx_vhc_bran as BrandVehicle } from "../../entities/vehicle/cx_vhc_bran";
import BrandRepository from "../../repository/vehicle/brand/BrandRepository";
import { setupMaster } from "cluster";
import TypeService from './TypeVehicleService'

export default interface IBrandService {
    getAll(): Promise<Array<BrandVehicle>>
    getOne(id: number): Promise<BrandVehicle>
    create(brandVehicle: BrandVehicle):Promise<BrandVehicle>
    delete(id: number): Promise<BrandVehicle>
    update(id: number, brandVehicle: BrandVehicle): Promise<BrandVehicle> 
    findByBrandName(brandName: string): Promise<BrandVehicle>
    findByTypeId(typeId: number): Promise<any>
}


export default class BrandService  implements IBrandService {

    private brandRepositorySql:BrandRepository;

    constructor(){
        this.brandRepositorySql = new BrandRepository();
    }

    public async getAll(): Promise<Array<BrandVehicle>> {
        return await this.brandRepositorySql.getAll();
    }

    public async getOne(id: number): Promise<BrandVehicle> {
        return await this.brandRepositorySql.getOne(id);
    }

    public async create(BrandVehicle: BrandVehicle): Promise<BrandVehicle> {
        return await this.brandRepositorySql.create(BrandVehicle);
    }

    public async delete(id: number): Promise<BrandVehicle> {
        return await this.brandRepositorySql.delete(id);
       

    }
    public async update(id: number, brandVehicle: BrandVehicle): Promise<BrandVehicle> {
        return await this.brandRepositorySql.update(id, brandVehicle);
       
    }

    public async findByBrandName(brandName: string): Promise<BrandVehicle> {
        return this.brandRepositorySql.findByBrandName(brandName)        
    }

    public async findByTypeId (idType:number): Promise<any>{
        return this.brandRepositorySql.findByTypeId(idType);
    }


}
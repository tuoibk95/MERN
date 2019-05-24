import { cx_vhc_img as ImageVehicle } from "../../entities/vehicle/cx_vhc_img";
import ImageVehicleRepository from "../../repository/vehicle/image/ImageVehicleRepository";

export default interface IImageVehicleService {
    getAll(): Promise<Array<ImageVehicle>>
    getOne(id: number): Promise<ImageVehicle>
    create(imageVehicle: ImageVehicle):Promise<ImageVehicle>
    createList(list: Array<ImageVehicle>):Promise< Array<ImageVehicle>>
    delete(id: number): Promise<ImageVehicle>
    update(id: number, imageVehicle: ImageVehicle): Promise<ImageVehicle> 
    findByImageTable(tableName: string, tableId: number): Promise<ImageVehicle[]>
}


export default class ImageVehicleService  implements IImageVehicleService {

    private imageRepo:ImageVehicleRepository;

    constructor(){
        this.imageRepo = new ImageVehicleRepository();
    }

    public async getAll(): Promise<Array<ImageVehicle>> {
        return await this.imageRepo.getAll();
    }

    public async getOne(id: number): Promise<ImageVehicle> {
        return await this.imageRepo.getOne(id);
    }

    public async create(imageVehicle: ImageVehicle): Promise<ImageVehicle> {
        return await this.imageRepo.create(imageVehicle);
    }

    public async createList(list: Array<ImageVehicle>): Promise<Array<ImageVehicle>> {
        return await this.imageRepo.createList(list);
    }

    public async delete(id: number): Promise<ImageVehicle> {
        return await this.imageRepo.delete(id);
       

    }
    public async update(id: number, imageVehicle: ImageVehicle): Promise<ImageVehicle> {
        return await this.imageRepo.update(id, imageVehicle);
       
    }

    public async findByImageTable(tableName:string,tableId: number): Promise<ImageVehicle[]> {
        return  this.imageRepo.findByImageTable(tableName, tableId)        
    }

}
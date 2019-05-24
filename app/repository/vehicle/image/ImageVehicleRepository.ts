import { cx_vhc_img as ImageVehicle } from "../../../entities/vehicle/cx_vhc_img";
import IImageVehicleRepository from "./IImageVehicleRepository";
import {Connection, Repository, getConnectionManager} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class ImageVehicleRepository extends ConnectVehicleSql implements IImageVehicleRepository {

    private imgRepo: Repository<ImageVehicle>;
    constructor() {
        super();
        this.imgRepo = getConnectionManager().get("chungxe_vehicle").getRepository(ImageVehicle);
    }

    public async getAll(): Promise<Array<ImageVehicle>> {
        return await this.imgRepo.find();
    }

    public async getOne(id: number): Promise<ImageVehicle> {
        return await this.imgRepo.findOne(id);
    }

    public async create(imageVehicle: ImageVehicle): Promise<ImageVehicle> {
        return await this.imgRepo.save(imageVehicle);
    }

    public async createList(list: Array<ImageVehicle>): Promise<Array<ImageVehicle>> {
        return await this.imgRepo.save(list);
    }

    public async delete(id: number): Promise<ImageVehicle> {
        let imageVehicle = await this.getOne(id);
        await this.imgRepo.delete(id);
        return imageVehicle
    }
    public async update(id: number, imageVehicle: ImageVehicle): Promise<ImageVehicle> {
        let ImageVehicleUpdate = await this.imgRepo.update(id, imageVehicle);
        return this.getOne(id);
    }

    public async findByImageTable(tableName: string, tableId: number): Promise<ImageVehicle[]> {
        return this.imgRepo.find({ "vhc_tbl_id": tableId, "vhc_tbl_name": tableName })
        
    }

  
   
}
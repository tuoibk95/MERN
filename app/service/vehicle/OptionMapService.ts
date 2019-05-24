import { cx_vhc_opt_map as OptionMap } from "../../entities/vehicle/cx_vhc_opt_map";
import OptionMapRepository from "../../repository/vehicle/OptionMap/OptionMapRepository";

export default interface IOptionMapService {
    getAll(): Promise<Array<OptionMap>>
    getOne(id: number): Promise<OptionMap>
    create(optionMap: OptionMap):Promise<OptionMap>
    delete(id: number): Promise<OptionMap>
    update(id: number, optionMap: OptionMap): Promise<OptionMap> 
    findByVehicleId (vehicleId: number):Promise<OptionMap[]>
    findByOptionId(optionId:number):Promise<OptionMap>
    creatList(list: Array<OptionMap>):Promise<Array<OptionMap>>
}


export default class OptionMapService  implements IOptionMapService {

    private optionMapRepo:OptionMapRepository;

    constructor(){
        this.optionMapRepo = new OptionMapRepository();
    }

    public async getAll(): Promise<Array<OptionMap>> {
        return await this.optionMapRepo.getAll();
    }

    public async getOne(id: number): Promise<OptionMap> {
        return await this.optionMapRepo.getOne(id);
    }

    public async create(optionMap: OptionMap): Promise<OptionMap> {
        return await this.optionMapRepo.create(optionMap);
    }

    public async delete(id: number): Promise<OptionMap> {
        return await this.optionMapRepo.delete(id);
       

    }
    public async update(id: number, optionMap: OptionMap): Promise<OptionMap> {
        return await this.optionMapRepo.update(id, optionMap);
       
    }

    public async findByOptionId(optionId: number): Promise<OptionMap> {
        return await this.optionMapRepo.findByOptionId(optionId)        
    }

    public async findByVehicleId (vehicleId:number): Promise<OptionMap[]>{
        return  await this.optionMapRepo.findByVehicleId(vehicleId);
    }

    public async creatList (list:Array<OptionMap>): Promise<Array<OptionMap>>{
        return await this.optionMapRepo.createList(list);
    }


}
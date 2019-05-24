import { cx_vhc_opt as OptionVehicle } from "../../entities/vehicle/cx_vhc_opt";
import OptionRepository from "../../repository/vehicle/option/OptionRepository";

export default interface IOptionService {
    getAll(): Promise<Array<OptionVehicle>>
    getOne(id: number): Promise<OptionVehicle>
    create(optionVehicle: OptionVehicle):Promise<OptionVehicle>
    delete(id: number): Promise<OptionVehicle>
    update(id: number, optionVehicle: OptionVehicle): Promise<OptionVehicle> 
    findByOptionName(name: string): Promise<OptionVehicle>
    findByPriority(priority: number): Promise<any>
    createList(list: Array<OptionVehicle>):Promise<Array<OptionVehicle>>
    findIds(ids: number[]): Promise<OptionVehicle[]>
}


export default class OptionVehicleService  implements IOptionService {

    private optionRepo:OptionRepository;

    constructor(){
        this.optionRepo = new OptionRepository();
    }

    public async getAll(): Promise<Array<OptionVehicle>> {
        return await this.optionRepo.getAll();
    }

    public async getOne(id: number): Promise<OptionVehicle> {
        return await this.optionRepo.getOne(id);
    }

    public async create(OptionVehicle: OptionVehicle): Promise<OptionVehicle> {
        return await this.optionRepo.create(OptionVehicle);
    }

    public async delete(id: number): Promise<OptionVehicle> {
        return await this.optionRepo.delete(id);
       

    }
    public async update(id: number, optionVehicle: OptionVehicle): Promise<OptionVehicle> {
        return await this.optionRepo.update(id, optionVehicle);
       
    }

    public async findByOptionName(name: string): Promise<OptionVehicle> {
        return await this.optionRepo.findByOptionName(name)        
    }

    public async findByPriority(priority: number): Promise<any> {
        return await this.optionRepo.findByPriority(priority)        
    }

    public async findIds(ids: number[]): Promise<OptionVehicle[]> {
        return await this.optionRepo.findIds(ids)        
    }

}
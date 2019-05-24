import { cx_vhc_opt as OptionVehicle } from "../../../entities/vehicle/cx_vhc_opt";
import IOptionRepository from "./IOptionRepository";
import { logger } from '../../../utils/Logger';
import {Connection, Repository, getConnectionManager, In} from 'typeorm';
import ConnectVehicleSql from "../../../connect/ConnectVehicleSql";

export default class OptionRepository extends ConnectVehicleSql implements IOptionRepository {

    private optionRepo: Repository<OptionVehicle>;
    constructor() {
        super();
        this.optionRepo = getConnectionManager().get("chungxe_vehicle").getRepository(OptionVehicle);
    }

    public async getAll(): Promise<Array<OptionVehicle>> {
        return await this.optionRepo.find();
    }

    public async getOne(id: number): Promise<OptionVehicle> {
        return await this.optionRepo.findOne(id);
    }

    public async create(optionVehicle: OptionVehicle): Promise<OptionVehicle> {
        return await this.optionRepo.save(optionVehicle);
    }

    public async createList(list: OptionVehicle[]): Promise<OptionVehicle[]> {
        return await this.optionRepo.save(list);
    }

    public async delete(id: number): Promise<OptionVehicle> {
        let optionVehicle = await this.getOne(id);
        await this.optionRepo.delete(id);
        return optionVehicle;

    }
    public async update(id: number, optionVehicle: OptionVehicle): Promise<OptionVehicle> {
        let optionUpdate = await this.optionRepo.update(id, optionVehicle);
        return this.getOne(id);
    }

    public async findByOptionName(name: string): Promise<OptionVehicle> {
        let option = this.optionRepo.findOne({ "vhc_opt_name": name })
        return option;
    }

    public async findByPriority(priority: number): Promise<any> {
        let result = this.optionRepo.findAndCount({ "vhc_opt_prty": priority })
        return result;
    }

    public async findIds(ids: number[]):Promise<OptionVehicle[]>{
        return this.optionRepo.find({"vhc_opt_id": In(ids)})
    }
   

    connect(): Promise<Connection[]>{
        return super.connect(); 
    }
   
}
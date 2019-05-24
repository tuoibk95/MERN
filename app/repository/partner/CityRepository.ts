import {cx_city as City} from "../../entities/partner/cx_city"
import { Repository, getConnectionManager } from "typeorm";

export default class CityRepository{
    private cityRepo: Repository<City>;
    constructor() {
        this.cityRepo = getConnectionManager().get("chungxe_partner").getRepository(City);
    }

    public async getAll() {
        return await this.cityRepo.find();
    }
    public async findById(id: number){
        return await this.cityRepo.findOne({"city_id": id})
    }
    public async create(city: City){
        return await this.cityRepo.save(city);
    }
    
    public async findByName(cityName: string){
        return await this.cityRepo.findOne({"city_name": cityName})
    }
    
}
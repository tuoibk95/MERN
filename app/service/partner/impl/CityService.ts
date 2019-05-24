import ICityService from "../ICityService";
import CityRepository from "../../../repository/partner/CityRepository";
import { cx_city as City } from "../../../entities/partner/cx_city";

export default class CityService implements ICityService {
    private cityRepository = new CityRepository();

    public async getAll(){
        return await this.cityRepository.getAll();
    }

    public async getCityById(id: number){
        return await this.cityRepository.findById(id);
    }

    public async getCityByName(name: string){
        return await this.cityRepository.findByName(name);
    }

    public async create(city: City) {
        return await this.cityRepository.create(city);
    }
}
import {cx_city as City} from "../../entities/partner/cx_city" 

export default interface ICityService {
    getAll(): Promise<City[]>;
    getCityById(id: number): Promise<City>;
    getCityByName(name: string): Promise<City>;
    create(city: City): Promise<City>;
}
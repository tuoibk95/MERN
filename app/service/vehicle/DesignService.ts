import { cx_vhc_dgn as DesignVehicle } from "../../entities/vehicle/cx_vhc_dgn";
import DesignRepository from "../../repository/vehicle/design/DesignRepository";

export default interface IDesignService {
    getAll(): Promise<Array<DesignVehicle>>
    getOne(id: number): Promise<DesignVehicle>
    create(design: DesignVehicle):Promise<DesignVehicle>
    delete(id: number): Promise<DesignVehicle>
    update(id: number, designVehicle: DesignVehicle): Promise<DesignVehicle> 
    findByDesignName(name: string): Promise<DesignVehicle>
}


export default class DesignService  implements IDesignService {

    private designRepo:DesignRepository;

    constructor(){
        this.designRepo = new DesignRepository();
    }

    public async getAll(): Promise<Array<DesignVehicle>> {
        return await this.designRepo.getAll();
    }

    public async getOne(id: number): Promise<DesignVehicle> {
        return await this.designRepo.getOne(id);
    }

    public async create(design: DesignVehicle): Promise<DesignVehicle> {
        return await this.designRepo.create(design);
    }

    public async delete(id: number): Promise<DesignVehicle> {
        return await this.designRepo.delete(id);
       

    }
    public async update(id: number, design: DesignVehicle): Promise<DesignVehicle> {
        return await this.designRepo.update(id, design);
       
    }

    public async findByDesignName(name: string): Promise<DesignVehicle> {
        return this.designRepo.findByDesignName(name)        
    }

}
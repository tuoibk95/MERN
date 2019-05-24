import { cx_vhc_type as TypeVehicle } from "../../entities/vehicle/cx_vhc_type";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import TypeVehicleService from "../../service/vehicle/TypeVehicleService";

export default class TypeVehicleController {
    private typeService: TypeVehicleService;

    constructor() {
        this.typeService = new TypeVehicleService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllTypeVehicle ==> GET");

        await this.typeService.getAll().then((result) =>
            res.send({ code: "success", data: result?result:{} })
        ).catch(err => MyUtil.handleError(err, res))
        
    };

    editTypeVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editTypeVehicle ==> PUT");

        var typeVehicle: TypeVehicle = new TypeVehicle();
        var id = req.body.vhc_type_id;

        typeVehicle = req.body;

        await this.typeService.update(id, typeVehicle).then((result) =>{
            res.send({ code: "success", data: result?result:{} })
        }).catch(err => MyUtil.handleError(err, res))
       ;

    };

    postTypeVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postTypeVehicle ==> POST");

        let typeVehicle: TypeVehicle = new TypeVehicle();
        typeVehicle = req.body;

        var result = await this.typeService.create(typeVehicle).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result?result:{} });

    };

    getTypeVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get type vehicle  by name==> GET");
        let typename = req.query.vhc_type_name;
        
        var result = await this.typeService.findByTypeName(typename).catch(err => MyUtil.handleError(err, res))
        
        res.send({ code: "success", data: result?result:{} });
    }

    getTypeVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get type vehicle  by id==> GET");
        let id = req.query.vhc_type_id;

        var result = await this.typeService.getOne(id).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result?result:{} });
    }



}
import { cx_vhc_opt as OptionVehicle } from "../../entities/vehicle/cx_vhc_opt";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import OptionService from "../../service/vehicle/OptionService";

export default class OptionVehicleController {
    private optionService: OptionService;

    constructor() {
        this.optionService = new OptionService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllOptionVehicle ==> GET");

        await this.optionService.getAll().then((result) =>
            res.send({ code: "success", data: result?result:{} })
        ).catch(err => MyUtil.handleError(err, res))
        
    };

    editOptionVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editOptionVehicle ==> PUT");

        var optionVehicle: OptionVehicle = new OptionVehicle();
        var id = req.body.vhc_opt_id;

        optionVehicle = req.body;

        await this.optionService.update(id, optionVehicle).then((result) =>{
            res.send({ code: "success", data: result?result:{} })
        }).catch(err => MyUtil.handleError(err, res))
       ;

    };

    postOptionVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postOptionVehicle ==> POST");

        let optionVehicle: OptionVehicle = new OptionVehicle();
        optionVehicle = req.body;

        var result = await this.optionService.create(optionVehicle).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result?result:{} });

    };

    getOptionVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get option vehicle  by name==> GET");
        let name = req.query.vhc_opt_name;
        
        var result = await this.optionService.findByOptionName(name).catch(err => MyUtil.handleError(err, res))
        
        res.send({ code: "success", data: result?result:{} });
    }

    getOptionVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get option vehicle  by id==> GET");
        let id = req.query.vhc_opt_id;

        var result = await this.optionService.getOne(id).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result?result:{} });
    }

    getOptionVehicleByPriority = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get option vehicle  by priority==> GET");
        let priority = req.query.vhc_opt_prty;

        var result = await this.optionService.findByPriority(priority).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result? { "list-option": result[0], "count": result[1] } : {}} );
    }



}
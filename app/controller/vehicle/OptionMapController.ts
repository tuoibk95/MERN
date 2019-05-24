import { cx_vhc_opt_map as OptionMap } from "../../entities/vehicle/cx_vhc_opt_map";
import { Request, Response, NextFunction } from "express";
import OptionMapService from "../../service/vehicle/OptionMapService";
import { MyUtil } from '../../utils/MyUtil'

export default class OptionMapControler {
    private optMapService: OptionMapService;

    constructor() {
        this.optMapService = new OptionMapService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllOptionMap ==> GET");

        await this.optMapService.getAll().then((result) =>
            res.send({ code: "success", data: result?result:{} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editOptionMap = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editOptionMap ==> PUT");

        var optionMap: OptionMap = new OptionMap();
        var id = req.body.vhc_opt_map_id;

        optionMap= req.body;
 
        await this.optMapService.update(id, optionMap).then((result) => {
            res.send({ code: "success", data: result?result:{} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postOptionMap = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postOptionMap ==> POST");

        let optionMap: OptionMap = new OptionMap();
        optionMap = req.body;

        var result = await this.optMapService.create(optionMap).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result?result:{} });

    };

    getOptionMapByOpt = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get OptionMap vehicle  by opt id==> GET");
        let optionId = req.query.vhc_opt_id;

        var result = await this.optMapService.findByOptionId(optionId).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result? { "list": result[0], "count": result[1] } : {}});
    }

    getOptionMapById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get OptionMap vehicle  by  id==> GET");
        let id = req.query.vhc_opt_map_id;

        var result = await this.optMapService.getOne(id).catch(err => MyUtil.handleError(err, res)).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result? { "list": result[0], "count": result[1] } : {}});
    }


    getOptionMapByVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get OptionMap vehicle  by vehicle id==> GET");
        let vehicleId = req.query.vhc_id;

        var result = await this.optMapService.findByVehicleId(vehicleId).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result?result:{} });
        
        
    }


}
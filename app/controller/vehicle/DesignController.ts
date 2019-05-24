
import { cx_vhc_dgn as DesignVehicle } from "../../entities/vehicle/cx_vhc_dgn";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import DesignService from "../../service/vehicle/DesignService";

export default class DesignController {
    private designService: DesignService;

    constructor() {
        this.designService = new DesignService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllDesignVehicle ==> GET");

        await this.designService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editDesignVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editDesignVehicle ==> PUT");

        var design: DesignVehicle = new DesignVehicle();
        var id = req.body.vhc_dgn_id;

        design = req.body;

        await this.designService.update(id, design).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postDesignVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postDesignVehicle ==> POST");

        let design: DesignVehicle = new DesignVehicle();
        design.vhc_dgn_name = req.body.vhc_dgn_name;

        var result = await this.designService.create(design).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });

    };

    getDesigneByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Design vehicle  by name==> GET");
        let name = req.query.vhc_dgn_name;

        var result = await this.designService.findByDesignName(name).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });

    }

    getDesignById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Design vehicle  by id==> GET");
        let id = req.query.vhc_dgn_id;

        var result = await this.designService.getOne(id).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });
    }



}

import { cx_vhc_tms as TransmissionVehicle } from "../../entities/vehicle/cx_vhc_tms";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import TransmissionService from "../../service/vehicle/TransmissionService";

export default class TransmissionController {
    private transService: TransmissionService;

    constructor() {
        this.transService = new TransmissionService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllTransmissionVehicle ==> GET");

        await this.transService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editTransmissionVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editTransmissionVehicle ==> PUT");

        var trans: TransmissionVehicle = new TransmissionVehicle();
        var id = req.body.id;

        trans = req.body;

        await this.transService.update(id, trans).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postTransmissionVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postTransmissionVehicle ==> POST");

        let transmission: TransmissionVehicle = new TransmissionVehicle();
        transmission= req.body;

        var result = await this.transService.create(transmission).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });

    };

    getTransmissioneByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Transmission vehicle  by name==> GET");
        let name = req.query.vhc_tms_name;

        var result = await this.transService.findByTransmissionName(name).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });

    }

    getTransmissionById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Transmission vehicle  by id==> GET");
        let id = req.query.vhc_tms_id;

        var result = await this.transService.getOne(id).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });
    }



}

import { cx_vhc_fuel as FuelVehicle } from "../../entities/vehicle/cx_vhc_fuel";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import FuelService from "../../service/vehicle/FuelService";

export default class fuelController {
    private fuelService: FuelService;

    constructor() {
        this.fuelService = new FuelService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllFuelVehicle ==> GET");

        await this.fuelService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editFuelVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editFuelVehicle ==> PUT");

        var fuel: FuelVehicle = new FuelVehicle();
        var id = req.body.vhc_fuel_id;

        fuel = req.body;

        await this.fuelService.update(id, fuel).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postFuelVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postFuelVehicle ==> POST");

        let fuel: FuelVehicle = new FuelVehicle();
        fuel = req.body;

        var result = await this.fuelService.create(fuel).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });

    };

    getFueleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get fuel vehicle  by name==> GET");
        let name = req.query.vhc_fuel_name;

        var result = await this.fuelService.findByFuelName(name).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });

    }

    getFuelById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get fuel vehicle  by id==> GET");
        let id = req.query.vhc_fuel_id;

        var result = await this.fuelService.getOne(id).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });
    }



}
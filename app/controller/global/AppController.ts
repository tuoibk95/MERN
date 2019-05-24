import { Request, Response, NextFunction } from "express";
import VehicleController from '../vehicle/VehicleController'
import { MyUtil } from "../../utils/MyUtil";
import MotoController from "../vehicle/MotoController";
import VehiclePartController from "../partner/VehiclePartController"
import PartnerController from "../partner/PartnerController"

export default class AppController {
    private carController;
    private motoController;
    private vehiclePartController;
    private partnerController;

    constructor() {
        this.carController = new VehicleController();
        this.motoController = new MotoController();
        this.vehiclePartController = new VehiclePartController();
        this.partnerController = new PartnerController();
    }

    public index = async (req: Request, res: Response) => {
        res.render('index.ejs');
    }
    public uploadCar = async (req: Request, res: Response, next: NextFunction) => {
        if (!req.file.path) {
            var err = { message: "Open file error" }
            res.send((err) => MyUtil.handleError(err, res))
        } else {
            var arr = await MyUtil.readFileExcell(req.file.path + "", 1);
            let vehicles = MyUtil.convertCar(arr)
            for (let i = 0; i < vehicles.length; i++) {
                let data = vehicles[i].vehicle

                req.body = data;
                await this.carController.postVehicle(req, res);
            }
            MyUtil.handleSuccess({}, res);

        }
    }

    public uploadMoto = async (req: Request, res: Response, next: NextFunction) => {
        if (!req.file.path) {
            var err = { message: "Open File Error" }
            res.send((err) => MyUtil.handleError(err, res))
        } else {
            var arr = await MyUtil.readFileExcell(req.file.path + "", 1);
            let vehicles = MyUtil.convertMoto(arr)
            for (let i = 0; i < vehicles.length; i++) {
                
                let data = vehicles[i].moto
                req.body = data;
                await this.motoController.postVehicle(req, res);
            }
            MyUtil.handleSuccess({}, res);

        }
    }

    public uploadVehiclePartner = async (req: Request, res: Response, next: NextFunction) => {
        if (!req.file.path) {
            var err = { message: "Open File Error" }
            res.send((err) => MyUtil.handleError(err, res))
        } else {
            var arr = await MyUtil.readFileExcell(req.file.path + "", 1);
            let vehicles = MyUtil.convertVehiclePart(arr)
            for (let i = 0; i < vehicles.length; i++) {     
                req.body = vehicles[i]
                await this.vehiclePartController.postVehicle(req, res);
            }
            MyUtil.handleSuccess({}, res);

        }
    }

    public uploadPartner = async (req: Request, res: Response, next: NextFunction) => {
        if (!req.file.path) {
            var err = { message: "Open File Error" }
            res.send((err) => MyUtil.handleError(err, res))
        } else {
            var arr = await MyUtil.readFileExcell(req.file.path + "", 1);
            let partners = MyUtil.convertPartner(arr)
            for (let i = 0; i < partners.length; i++) {     
                req.body = partners[i]
                await this.partnerController.postPartner(req, res);
            }
            MyUtil.handleSuccess({}, res);

        }
    }

}
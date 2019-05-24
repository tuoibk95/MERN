
import { cx_vhc_part as VehiclePartner } from "../../entities/partner/cx_vhc_part";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import VehiclePartService from "../../service/partner/impl/VehiclePartService";
import VehicleService from "../../service/vehicle/VehicleService"
import VehicleController from "../../controller/vehicle/VehicleController"
import PartnerController from "../../controller/partner/PartnerController"
import PartnerService from "../../service/partner/impl/PartnerService"
import MotoService from "../../service/vehicle/MotoService";

export default class VehiclePartController {
    private vehicleService: VehicleService;
    private partnerService: PartnerService;
    private vehiclePartService: VehiclePartService;
    private vehicleController: VehicleController;
    private motoService: MotoService;
    private partnerController: PartnerController;


    constructor() {
        this.vehicleService = new VehicleService();
        this.vehiclePartService = new VehiclePartService();
        this.partnerService = new PartnerService();
        this.vehicleController = new VehicleController();
        this.partnerController = new PartnerController();
        this.motoService = new MotoService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllVehicle ==> GET");

        await this.vehiclePartService.getAll()
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))

    };

    editVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editVehicle ==> PUT");

        var vehicle: VehiclePartner = new VehiclePartner();
        var id = req.body.vhc_id;

        vehicle = req.body;

        await this.vehiclePartService.update(id, vehicle).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res));

    };

    postVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postVehiclePartner ==> POST");
        let checkVehicle, vehicleId;
        let vehicle: VehiclePartner = new VehiclePartner();


        let data = req.body;
        let name = req.body.vhc_part_name + "";
        let vhc_bran_name = req.body.vhc_bran_name;
        let vch_modl_name = req.body.vhc_modl_name;
        let vch_name = req.body.vhc_name;
        if (vch_modl_name)
            delete data["vch_modl_name"]
        delete data["vhc_bran_id"]
        vehicle = data;

        let obj = { "vhc_part_name": name, "part_id": req.body.vhc_part_id }
        checkVehicle = await this.vehiclePartService.findByVehicleOption(obj).catch(err => MyUtil.handleError(err, res))
        if (checkVehicle.length > 0) {
            checkVehicle = false
            let err = { "message": name + " already exist" };
            MyUtil.handleError(err, res);
        }
        else {
            if (vch_modl_name) {
                await this.vehicleService.findIdByName(vhc_bran_name, vch_modl_name, vch_name)
                    .then((result) => {
                        vehicle.vhc_id = result ? result.vhc_id : null
                    })
                    .catch((err) => MyUtil.handleError(err, res))
            } else {

                await this.motoService.findIdByName(vhc_bran_name, vch_name)
                    .then((result) => {
                        vehicle.vhc_id = result ? result.vhc_id : null
                    })
                    .catch((err) => MyUtil.handleError(err, res))
            }

            let result;
            if (vehicle.vhc_id) {
                vehicle["vhc_part_slug"] = MyUtil.string_to_slug(vehicle.vhc_part_name)
                await this.vehiclePartService.create(vehicle).catch(err => MyUtil.handleError(err, res))

            }
        }
    };

    postListVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get Vehicle partner  by name==> GET");
        let list = new Array<VehiclePartner>();
        let checkVehicle, check = true;
        if (req.body) {
            list = req.body;
            for (let i = 0; i < list.length; i++) {
                let item = list[i];

                let vehicle: VehiclePartner = new VehiclePartner();
                let name = item.vhc_part_name + "";
                vehicle = item;
                checkVehicle = await this.vehicleService.findByVehicleName(name).catch(err => MyUtil.handleError(err, res))
                if (checkVehicle) {
                    checkVehicle = false
                    let err = { "message": "vhc_part_name already exist" };
                    MyUtil.handleError(err, res);
                    check = false;
                    break;
                }
            }
            if (check) {
                var result = await this.vehiclePartService.createList(list).catch(err => MyUtil.handleError(err, res))
                MyUtil.handleSuccess(result, res)
            } else
                MyUtil.handleSuccess(result, res);
        }
        else {
            var err = { message: "Data none" }
            MyUtil.handleError(err, res)
        }

    }

    getVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Vehicle partner  by id==> GET");
        let id = req.query.vhc_part_id;

        var result = await this.vehiclePartService.getOne(id).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);
    }

    getVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Vehicle partner  by name==> GET");
        let id = req.query.vhc_part_name;

        var result = await this.vehiclePartService.findByVehicleName(id).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);
    }

    getVehicleOption = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get Vehicle partner  by option==> GET");
        let option = req.query;

        var result = await this.vehiclePartService.findByVehicleOption(option).catch(err => MyUtil.handleError(err, res))

        MyUtil.handleSuccessList(result, res);
    }

    getListVehicles = async (req: Request, res: Response, next: NextFunction) => {
        let params = req.query;
        if (params) {
            let vehicles, partners, vehiclePartners, listVehicle = [];
            let vehicleIds = [], partnerIds = []
            let option1 = {}, option2 = {}

            if (params.vhc_type_id) {
                option1["vhc_type_id"] = params.vhc_type_id
                option2["vhc_type_id"] = params.vhc_type_id
            }
            if (params.vhc_bran_id && params.vhc_bran_id != 0) {
                option1["vhc_bran_id"] = params.vhc_bran_id
            }
            if (params.city_id) {
                option2["city_id"] = params.city_id
            }

            vehicles = await this.vehicleService.findByVehicleOption(option1).catch((err) => MyUtil.handleError({ "message": "qqq" }, res))

            if (vehicles) {
                let arr = vehicles[0]
                for (let i = 0; i < vehicles[1]; i++) {
                    vehicleIds.push(arr[i]["vhc_id"])
                }
            }

            partners = await this.partnerService.findByOptions(option2).catch((err) => MyUtil.handleError(err, res))
            if (partners) {
                let arr = partners[0]

                for (let i = 0; i < partners[1]; i++) {
                    partnerIds.push(arr[i]["part_id"])
                }

            }

            console.log(JSON.stringify(vehicleIds))
            console.log(JSON.stringify(partnerIds))

            vehiclePartners = await this.vehiclePartService.findVehicles(vehicleIds, partnerIds, params.price_from, params.price_to).catch(err => MyUtil.handleError(err, res))

            if (vehiclePartners[1] > 0) {
                let list = vehiclePartners[0]
                for (let i = 0; i < vehiclePartners[1]; i++) {
                    let vehicle = await this.getDetailVehicle(list[i].vhc_part_id).catch((err) => MyUtil.handleError(err, res))
                    listVehicle.push(vehicle)

                }
            }

            MyUtil.handleSuccess(listVehicle, res)
        } else {
            MyUtil.handleError({ message: "No params request" }, res);
        }

    }

    getDetailVehicleParter = async (req: Request, res: Response, next: NextFunction) => {
        let vch_part_id = req.query.vhc_part_id;
        let result = await this.getDetailVehicle(vch_part_id).catch((err) => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);
    }

    getDetailVehicle = async (vhc_part_id: number) => {
        let vhc_id, part_id, vehicle, partner;
        let vehiclePartner = {}

        if (vhc_part_id) {
            let result = await this.vehiclePartService.getOne(vhc_part_id).catch((err) => MyUtil.handleErrorFunction(err))

            if (result) {
                vhc_id = result.vhc_id;
                part_id = result.part_id;

                vehicle = await this.vehicleController.getDetailVehicle(vhc_id).catch((err) => MyUtil.handleErrorFunction(err))
                partner = await this.partnerController.getDetailPartner(part_id)

                if (vehicle && partner) {
                    vehiclePartner["vhc"] = vehicle;
                    vehiclePartner["part"] = partner;
                    vehiclePartner["vhc_part_id"] = result.vhc_part_id;
                    vehiclePartner["vhc_part_name"] = result.vhc_part_name;
                    vehiclePartner["vhc_part_year"] = result.vhc_part_year;
                    vehiclePartner["vhc_part_defa_prie"] = result.vhc_part_defa_prie;
                    vehiclePartner["vhc_part_prty"] = result.vhc_part_prty;
                    vehiclePartner["vhc_part_star"] = Math.floor(Math.random() * 5) + 1  ;

                }

            }
        }
        return vehiclePartner;

    }

}
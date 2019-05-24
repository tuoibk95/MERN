
import { cx_vhc as Vehicle } from "../../entities/vehicle/cx_vhc";
import { cx_vhc_opt_map as OptionMap } from '../../entities/vehicle/cx_vhc_opt_map'
import { cx_vhc_img as ImageVehicle } from '../../entities/vehicle/cx_vhc_img'
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import VehicleService from "../../service/vehicle/VehicleService";
import OptionMapService from "../../service/vehicle/OptionMapService";
import ImageService from "../../service/vehicle/ImageService";
import OptionService from "../../service/vehicle/OptionService";
import { param } from "../../../node_modules/express-validator/check";


export default class VehicleController {
    private vehicleService: VehicleService;
    private optionService: OptionService;
    private optMapService: OptionMapService;
    private imageService: ImageService;

    constructor() {
        this.vehicleService = new VehicleService();
        this.optionService = new OptionService();
        this.optMapService = new OptionMapService();
        this.imageService = new ImageService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllVehicle ==> GET");

        await this.vehicleService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editVehicle ==> PUT");

        var vehicle: Vehicle = new Vehicle();
        var id = req.body.vch_id;

        vehicle = req.body;

        await this.vehicleService.update(id, vehicle).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res));

    };

    postVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postVehicle ==> POST");
        let checkVehicle, checkOptions = [];
        checkOptions[0] = true
        let vehicle: Vehicle = new Vehicle(), optionMaps: Array<OptionMap> = new Array<OptionMap>();

        let data = req.body;
        let name = req.body.vhc_name + "", images = req.body.images + "", options = req.body.options + "";
        let value = req.body.vhc_egin_num;

        delete data["options"];
        delete data["images"]

        vehicle = data;
        vehicle["vhc_engin_num"] = parseFloat(value);

        let obj = { "vch_name": data.vhc_name, "vch_bran_name": data.vch_bran_name, "vch_modl_name": data.vch_modl_name }

        checkVehicle = await this.vehicleService.findByVehicleOption(obj).catch(err => MyUtil.handleError(err, res))
        if (checkVehicle && checkVehicle[2] > 0) {
            checkVehicle = false
            let err = { "message": "vehicle is already exist" };
            MyUtil.handleError(err, res);
        }
        else {
            if (options.trim().toString() != null)
                checkOptions = await this.getOptionsFromVehicle(options, res, optionMaps);
            if (checkOptions[0]) {
                vehicle["vhc_slug"] = MyUtil.string_to_slug(vehicle.vhc_bran_name + " " + vehicle.vhc_modl_name + " " + vehicle.vhc_name)
                let result = await this.vehicleService.create(vehicle).catch(err => MyUtil.handleError(err, res))
                let vch_id = result ? result.vhc_id : 0;
                optionMaps = checkOptions[1]
                optionMaps.map(function (optMap) {
                    optMap.vhc_id = vch_id;
                    return optMap;
                })
                if (result) {
                    if (options != undefined && options != 'undefined')
                        await this.optMapService.creatList(optionMaps).catch(err => MyUtil.handleError(err, res));
                    if (images != undefined && images != 'undefined') {
                        await this.postListImageVehicle(images, result, res).catch(err => MyUtil.handleError(err, res));
                    }
                }

            }
        }
    };


    postListImageVehicle = async (images: string, vehicle, res: Response) => {
        let list;
        console.log("images: " + images)
        if (images !== 'null') {
            list = MyUtil.trimArray(images, ",");
        }

        let arr: Array<ImageVehicle> = new Array<ImageVehicle>();
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i]) {
                    let imageVehicle = new ImageVehicle();
                    imageVehicle.vhc_img_link = list[i];
                    imageVehicle.vhc_img_name = MyUtil.string_to_slug(vehicle.vch_bran_name + " " + vehicle.vch_modl_name + " " + vehicle.vhc_name + " " + i);
                    imageVehicle.vhc_tbl_id = vehicle.vhc_id;
                    imageVehicle.vhc_tbl_name = "cx_vhc"
                    arr.push(imageVehicle)
                }

            }
            await this.imageService.createList(arr).catch((error) => MyUtil.handleError(error, res));
        }

    }

    getOptionsFromVehicle = async (options: string, res: Response, optionMaps: Array<OptionMap>) => {

        let list = MyUtil.trimArray(options, ",");
        let checkOptions = true;

        for (var i = 0; i < list.length; i++) {
            let option = await this.optionService.findByOptionName(list[i]).catch(err => MyUtil.handleError(err, res))
            let optionMap = new OptionMap();
            if (option) {
                optionMap.vhc_opt_id = option ? option.vhc_opt_id : null;
                optionMaps.push(optionMap)
            } else {
                checkOptions = false;
                let err = { "message": "option " + list[i] + " không tồn tại" };
                MyUtil.handleError(err, res);
            }

        }
        return [checkOptions, optionMaps];
    }

    postListVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get Vehicle vehicle  by name==> GET");
        let list = new Array<Vehicle>();
        list = req.body;
        var result = await this.vehicleService.createList(list).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);

    }

    getVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Vehicle vehicle  by id==> GET");
        let id = req.query.vhc_id;

        var result = await this.vehicleService.getOne(id).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);
    }

    getVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Vehicle vehicle  by name==> GET");
        let id = req.query.vhc_name;

        var result = await this.vehicleService.findByVehicleName(id).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);
    }

    getVehicleOption = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get Vehicle vehicle  by option==> GET");
        let option = req.query;

        var result = await this.vehicleService.findByVehicleOption(option).catch(err => MyUtil.handleError(err, res))

        MyUtil.handleSuccessList(result, res);
    }

    getDetailVehicle = async (vhc_id: number) => {
        let vch_id = vhc_id;
        let vehicle;

        if (vch_id) {
            let vhc_imgs, vhc_opts;
            vehicle = await this.vehicleService.getOne(vch_id).catch(err => MyUtil.handleErrorFunction(err))
            let optionIds = [];
            await this.optMapService.findByVehicleId(vch_id)
                .catch(err => MyUtil.handleErrorFunction(err))
                .then(result => {
                    let length = result ? result.length : 0;
                    for (let i = 0; i < length; i++) {
                        optionIds[i] = result[i].vhc_opt_id;
                    }

                })
            if (optionIds.length > 0) {
                await this.optionService.findIds(optionIds).then(result => {
                    if (result) {
                        vehicle["vhc_opts"] = result
                    };
                })
            }

            await this.imageService.findByImageTable("cx_vhc", vch_id).catch(err => MyUtil.handleErrorFunction(err))
                .then(result => {
                    vhc_imgs = result;
                })
            if (vhc_imgs) {
                vehicle["vhc_imgs"] = vhc_imgs
            }

            return vehicle;

        } else {
            let err = { message: "vhc_id not exits" }
            MyUtil.handleErrorFunction(err)
        }


    }

}
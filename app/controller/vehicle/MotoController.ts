
import { cx_vhc_moto as Vehicle } from "../../entities/vehicle/cx_vhc_moto";
import { cx_vhc_img as ImageVehicle } from '../../entities/vehicle/cx_vhc_img'
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import MotoService from "../../service/vehicle/MotoService";
import ImageService from "../../service/vehicle/ImageService";


export default class MotoController {
    private motoService: MotoService;
    private imageService: ImageService;

    constructor() {
        this.motoService = new MotoService();
        this.imageService = new ImageService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllMoto ==> GET");

        await this.motoService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editVehicle ==> PUT");

        var vehicle: Vehicle = new Vehicle();
        var id = req.body.vhc_id;

        vehicle = req.body;

        await this.motoService.update(id, vehicle).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res));

    };

    postVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received postVehicle ==> POST");
        let checkVehicle, checkOptions = true;
        let vehicle: Vehicle = new Vehicle();
        let data = req.body;

        let name = req.body.vhc_name + "", images = req.body.images + "";
        let value = req.body.vhc_egin_num;

        delete data["images"]
        vehicle = data;
        vehicle["vhc_engin_num"] = parseFloat(value);

        let obj = { "vhc_name": data.vhc_name, "vhc_bran_name": data.vhc_bran_name }

        checkVehicle = await this.motoService.findByVehicleOption(obj).catch(err => MyUtil.handleError(err, res))
        if (checkVehicle && checkVehicle[1] > 0) {
            checkVehicle = false
            let err = { "message": "vehicle already exits" };
            MyUtil.handleError(err, res);
        }
        else {
            vehicle["vhc_slug"] = MyUtil.string_to_slug(vehicle.vhc_bran_name +" " +vehicle.vhc_name);
            let result = await this.motoService.create(vehicle).catch(err => MyUtil.handleError(err, res))
            if (result) {
                if (images.trim().toString !== null && images != undefined && images != 'undefined')
                    await this.postListImageVehicle(images, result, res).catch(err => MyUtil.handleError(err, res));

            }
        }
    };


    postListImageVehicle = async (images: string, vehicle, res: Response) => {
        let list;
        
        if (images.toString() !== null || images == undefined) {
            list = MyUtil.trimArray(images, ",");
        }
        let arr: Array<ImageVehicle> = new Array<ImageVehicle>();
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i]) {
                    let imageVehicle = new ImageVehicle();
                    imageVehicle.vhc_img_link = list[i];
                    imageVehicle.vhc_img_name = MyUtil.string_to_slug(vehicle.vhc_bran_name +" " +vehicle.vhc_name);
                    imageVehicle.vhc_tbl_id = vehicle.vhc_id;
                    imageVehicle.vhc_tbl_name = "cx_vhc"
                    arr.push(imageVehicle)
                }

            }
            await this.imageService.createList(arr).catch((error) => MyUtil.handleError(error, res));
        }

    }

    getVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Vehicle vehicle  by id==> GET");
        let id = req.query.vhc_id;

        var result = await this.motoService.getOne(id).catch(err => MyUtil.handleError(err, res))

        MyUtil.handleSuccess(result, res);
    }

    getVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Vehicle vehicle  by name==> GET");
        let id = req.query.vhc_name;

        var result = await this.motoService.findByVehicleName(id).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccess(result, res);
    }

    getVehicleOption = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get Vehicle vehicle  by option==> GET");
        let option = req.query;

        var result = await this.motoService.findByVehicleOption(option).catch(err => MyUtil.handleError(err, res))

        MyUtil.handleSuccessList(result, res);
    }

}
import { cx_vhc_img as ImageVehicle } from "../../entities/vehicle/cx_vhc_img";
import { Request, Response, NextFunction } from "express";
import ImageVehicleService from "../../service/vehicle/ImageService";
import { MyUtil } from '../../utils/MyUtil'

export default class ImageVehicleControler {
    private imageService: ImageVehicleService;

    constructor() {
        this.imageService = new ImageVehicleService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllImageVehicle ==> GET");

        await this.imageService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editImageVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editImageVehicle ==> PUT");

        var imageVehicle: ImageVehicle = new ImageVehicle();
        var id = req.body.vhc_img_id;

        imageVehicle = req.body;

        await this.imageService.update(id, imageVehicle).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postImageVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postImageVehicle ==> POST");

        let imageVehicle: ImageVehicle = new ImageVehicle();
        imageVehicle = req.body;

        var result = await this.imageService.create(imageVehicle).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });

    };

    postListImageVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postListImageVehicle ==> POST");

        let list: Array<ImageVehicle> = new Array<ImageVehicle>();
        list = req.body;

        var result = await this.imageService.createList(list).catch(err => MyUtil.handleError(err, res))
        MyUtil.handleSuccessList(result, res)

    };

    getImageVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get ImageVehicle vehicle  by id==> GET");
        let imageVehicleId = req.query.vhc_img_id;

        var result = await this.imageService.getOne(imageVehicleId).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });


    }

    getImageByVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get ImageVehicle vehicle  by opt id==> GET");
        let vhc_tbl_name = req.query.vhc_tbl_name;
        let vhc_tbl_id = req.query.vhc_tbl_id;

        var result = await this.imageService.findByImageTable(vhc_tbl_id, vhc_tbl_name).catch(err => MyUtil.handleError(err, res)).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });
    }


}
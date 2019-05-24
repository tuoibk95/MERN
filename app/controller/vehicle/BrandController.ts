import { cx_vhc_bran as BrandVehicle } from "../../entities/vehicle/cx_vhc_bran";
import { Request, Response, NextFunction } from "express";
import BrandService from "../../service/vehicle/BrandService";
import TypeService from "../../service/vehicle/TypeVehicleService";
import { MyUtil } from '../../utils/MyUtil'

export default class BrandController {
    private brandService: BrandService;
    private typeService: TypeService;

    constructor() {
        this.brandService = new BrandService();
        this.typeService = new TypeService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllBrandVehicle ==> GET");

        await this.brandService.getAll()
            .then((result) => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))

    };

    editBrandVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editBrandVehicle ==> PUT");

        var brandVehicle: BrandVehicle = new BrandVehicle();
        var id = req.body.vhc_bran_id;

        brandVehicle = req.body;

        await this.brandService.update(id, brandVehicle)
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res));
    };

    postBrandVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postBrandVehicle ==> POST");

        let brandVehicle: BrandVehicle = new BrandVehicle();
        brandVehicle = req.body;

        await this.brandService.create(brandVehicle)
            .then(data => MyUtil.handleSuccess(data, res))
            .catch(err => MyUtil.handleError(err, res))
    };

    getBrandVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Brand vehicle  by name==> GET");
        let brandname = req.query.vhc_bran_name;

        await this.brandService.findByBrandName(brandname)
            .then(data => MyUtil.handleSuccess(data, res))
            .catch(err => MyUtil.handleError(err, res))
    }

    getBrandVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Brand vehicle  by name==> GET");
        let id = req.query.vhc_bran_id;

        await this.brandService.getOne(id)
            .then(data => MyUtil.handleSuccess(data, res))
            .catch(err => MyUtil.handleError(err, res))
    }

    getByTypeName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Brand vehicle  by name==> GET");
        let typeName = req.query.vhc_type_name;

        await this.typeService.findByTypeName(typeName)
            .then(data => MyUtil.handleSuccess(data, res))
            .catch(err => MyUtil.handleError(err, res));

    }

    getByTypeId = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Brand vehicle  by typeId==> GET");
        let typeId = req.query.vhc_type_id;
        console.log(typeId);
        await this.brandService.findByTypeId(typeId)
            .catch(err => MyUtil.handleError(err, res))
            .then(data => MyUtil.handleSuccess(data, res));


    }


}
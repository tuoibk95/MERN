import { cx_vhc_modl as ModelVehicle } from "../../entities/vehicle/cx_vhc_modl";
import { Request, Response, NextFunction } from "express";
import ModelService from "../../service/vehicle/ModelService";
import BrandService from "../../service/vehicle/BrandService";
import { MyUtil } from '../../utils/MyUtil'

export default class ModelController {
    private modelService: ModelService;
    private brandService: BrandService;

    constructor() {
        this.modelService = new ModelService();
        this.brandService = new BrandService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllModelVehicle ==> GET");

        await this.modelService.getAll().then((result) =>
            res.send({ code: "success", data: result?result:{} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editModelVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editModelVehicle ==> PUT");

        var modelVehicle: ModelVehicle = new ModelVehicle();
        var id = req.body.vhc_modl_id;

        modelVehicle = req.body;

        await this.modelService.update(id, modelVehicle).then((result) => {
            res.send({ code: "success", data: result?result:{} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postModelVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postModelVehicle ==> POST");

        let modelVehicle: ModelVehicle = new ModelVehicle();
        modelVehicle= req.body;

        var result = await this.modelService.create(modelVehicle).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result?result:{} });

    };

    getModelVehicleByName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Model vehicle  by name==> GET");
        let modelName = req.query.vhc_modl_name;

        var result = await this.modelService.findByModelName(modelName).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result?result:{} });
    }

    getModelVehicleById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Model vehicle  by id==> GET");
        let id = req.query.vhc_modl_id;

        var result = await this.modelService.getOne(id).catch(err => MyUtil.handleError(err, res)).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result?result:{} });
    }

    getByBrandName = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Model vehicle  by name==> GET");
        let brandName = req.query.vhc_bran_name;

        let brand = await this.brandService.findByBrandName(brandName).catch(err => MyUtil.handleError(err, res));
        if (brand) {
            let id = brand["vhc_bran_id"];
            req.query.vhc_bran_id = id;
            await this.getByBrandId(req, res, next).catch(err => MyUtil.handleError(err, res))
        } else {
            res.send({ code: "success", data: {} });
        }

    }

    getByBrandId = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Model vehicle  by typeId==> GET");
        let brandId = req.query.vhc_bran_id;

        var result = await this.brandService.findByTypeId(brandId).catch(err => MyUtil.handleError(err, res))
        
        res.send({ code: "success", data: result?{ "list-model": result[0], "count": result[1] }:{} });
        
    }


}
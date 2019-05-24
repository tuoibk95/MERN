import { cx_vhc_type_opt as TypeOption } from "../../entities/vehicle/cx_vhc_type_opt";
import { Request, Response, NextFunction } from "express";
import TypeOptionService from "../../service/vehicle/TypeOptionService";
import { MyUtil } from '../../utils/MyUtil'

export default class TypeOptionControler {
    private typeOptService: TypeOptionService;

    constructor() {
        this.typeOptService = new TypeOptionService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllTypeOption ==> GET");

        await this.typeOptService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editTypeOption = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editTypeOption ==> PUT");

        var typeOption: TypeOption = new TypeOption();
        var id = req.body.vhc_type_opt_id;

        typeOption = req.body;

        await this.typeOptService.update(id, typeOption).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res));

    };

    postTypeOption = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postTypeOption ==> POST");

        let typeOption: TypeOption = new TypeOption();
        typeOption.vhc_opt_id = req.body.vhc_opt_id;
        typeOption.vhc_type_id = req.body.vhc_type_id;

        var result = await this.typeOptService.create(typeOption).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });

    };

    getTypeOptionByType = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get TypeOption vehicle  by type id==> GET");
        let typeId = req.query.vhc_type_id;

        await this.typeOptService.findByTypeId(typeId)
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))
    }

    getTypeOptionByOpt = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get TypeOption vehicle  by opt id==> GET");
        let id = req.query.vhc_opt_id;

        await this.typeOptService.findByOptionId(id)
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))
    }


    getTypeOptionById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get TypeOption vehicle  by id==> GET");
        let typeOptionId = req.query.vhc_type_opt_id;

        await this.typeOptService.getOne(typeOptionId)
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))

    }


}
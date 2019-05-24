import { Request, Response, NextFunction } from "express";
import CityService from "../../service/partner/impl/CityService";
import ICityService from "../../service/partner/ICityService";
import { MyUtil } from "../../utils/MyUtil";
import { cx_city as City } from "../../entities/partner/cx_city";

export default class PartnerController {
    private cityService: ICityService;

    constructor() {
        this.cityService = new CityService()
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get all Cities ==> GET");

        await this.cityService.getAll().then((result) =>
            MyUtil.handleSuccess(result, res)
        ).catch(err => next(err));

    };

    public postCreate = async (req: Request, res: Response) => {
        console.log("create a new city ==> POST");
        if (!(req.body && req.body.city_name)) {
            MyUtil.handleError({ message: "No data!" }, res);
        } else {
            var newCity = new City();
            newCity.city_name = req.body.city_name;

            var city = null;
            await this.cityService.getCityByName(newCity.city_name).then(result => city = result);

            if (city) MyUtil.handleError({ message: "City is existed!!" }, res);
            else await this.cityService.create(newCity)
                .then(result => MyUtil.handleSuccess(result, res))
                .catch(err => MyUtil.handleError(err, res))
        }
    }

}
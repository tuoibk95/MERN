import { cx_vhc_seat as SeatVehicle } from "../../entities/vehicle/cx_vhc_seat";
import { Request, Response, NextFunction } from "express";
import { MyUtil } from '../../utils/MyUtil';
import SeatService from "../../service/vehicle/SeatService";

export default class SeatController {
    private seatService: SeatService;

    constructor() {
        this.seatService = new SeatService();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received getAllSeatVehicle ==> GET");

        await this.seatService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
        ).catch(err => MyUtil.handleError(err, res))

    };

    editSeatVehicle = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received editSeatVehicle ==> PUT");

        var seatVehicle: SeatVehicle = new SeatVehicle();
        var id = req.body.vhc_seat_id;

        seatVehicle = req.body;

        await this.seatService.update(id, seatVehicle).then((result) => {
            res.send({ code: "success", data: result ? result : {} })
        }).catch(err => MyUtil.handleError(err, res))
            ;

    };

    postSeatVehicle = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received postSeatVehicle ==> POST");

        let seat: SeatVehicle = new SeatVehicle();
        seat = req.body;

        var result = await this.seatService.create(seat).catch(err => MyUtil.handleError(err, res))
        res.send({ code: "success", data: result ? result : {} });

    };

    getSeateByNumber = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Seat vehicle  by name==> GET");
        let number = req.query.vhc_seat_num;

        var result = await this.seatService.findBySeatNumber(number).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });
    }

    getSeatById = async (req: Request, res: Response, next: NextFunction) => {

        console.log("Received get Seat vehicle  by id==> GET");
        let id = req.query.vhc_seat_id;

        var result = await this.seatService.getOne(id).catch(err => MyUtil.handleError(err, res))

        res.send({ code: "success", data: result ? result : {} });
    }
}
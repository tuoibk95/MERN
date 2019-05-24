import { Request, Response, NextFunction } from "express";
import BookingServiceImpl from "../../service/booking/BookingServiceImpl";
import IBookingService from "../../service/booking/IBookingService";
import { MyUtil } from "../../utils/MyUtil";
import { cx_book } from "../../entities/booking/cx_book";
import BookingReqDTO from "../../dto/booking/BookingReqDTO";
import { cx_book_fedbak } from "../../entities/booking/cx_book_fedbak";
import { Utils } from "../../utils/Validate";

export default class PartnerController {
    private bookingService: IBookingService;

    constructor() {
        this.bookingService = new BookingServiceImpl()
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get all bookings ==> GET");

        await this.bookingService.getAll().then((result) =>
            MyUtil.handleSuccess(result, res)
        ).catch(err => next(err));

    };

    public getByCode = async (req: Request, res: Response) => {
        console.log("get a booking by code ==> GET");

        var code = req.params.code;
        if (!code) MyUtil.handleError({ message: "No data!" }, res);

        await this.bookingService.getByCode(code)
            .then(data => {
                console.log(data)
                MyUtil.handleSuccess(data, res)
            })
            .catch(err => MyUtil.handleError(err, res))
    }

    public postCreate = async (req: Request, res: Response) => {
        console.log("create a new booking ==> POST");

        if (!req.body) {
            MyUtil.handleError({ message: "No data!" }, res);
        }
        console.log(req.body)
        var bookReq = new BookingReqDTO(req.body);

        if (!Utils.isEmailAddress(bookReq.getCstmEmai())) MyUtil.handleError({ message: "Email is not true!" }, res);
        if (!Utils.isPhoneNumber(bookReq.getCstmPhon())) MyUtil.handleError({ message: "Phone number is not true!" }, res);
        if (bookReq.getVhcPartId() <= 0 && bookReq.getVhcPartName() === "") MyUtil.handleError({ message: "Vehicle info is wrong!" }, res);

        console.log(bookReq)
        await this.bookingService.create(bookReq)
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))

    }

    public postCalculateDeliPrice = async (req: Request, res: Response) => {
        console.log("calculate delivery price for booking");

        if (!req.body) {
            MyUtil.handleError({ message: "No data!" }, res);
        }
        console.log(req.body)
        var bookReq = new BookingReqDTO(req.body);
        console.log(bookReq)
        if (bookReq && bookReq.getVhcPartId() < 0 || !bookReq.getCstmDeliAddrLat() || !bookReq.getCstmDeliAddrLng()) MyUtil.handleError({message: "Data is not enough!!"}, res);

        await this.bookingService.calculateDeliPrice(bookReq)
            .then(result => MyUtil.handleSuccess(result, res))
            .catch(err => MyUtil.handleError(err, res))
    }

}
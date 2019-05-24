import { Request, Response, NextFunction } from "express";
import PartnerService from "../../service/partner/impl/PartnerService";
import IPartnerService from "../../service/partner/IPartnerService";
import { MyUtil } from "../../utils/MyUtil";
import ICityService from "../../service/partner/ICityService";
import CityService from "../../service/partner/impl/CityService";
import HolidayService from "../../service/partner/impl/HolidayService";
import WdayService from "../../service/partner/impl/WdayService";
import ProcedureService from "../../service/partner/impl/ProcedureService";
import PayMethodService from "../../service/partner/impl/PayMethodService";
import PartWdayService from "../../service/partner/impl/PartWdayService";
import PartProcService from "../../service/partner/impl/PartProcService";
import PartPayMethService from "../../service/partner/impl/PartPayMethService";
import PartHoliService from "../../service/partner/impl/PartHoliService"
import PartnerReqDTO from "../../dto/partner/PartnerReqDTO";
import { cx_part as Partner } from "../../entities/partner/cx_part"
import { cx_wday as WeekDay } from "../../entities/partner/cx_wday"
import { cx_part_wday as PartWeekDay } from "../../entities/partner/cx_part_wday"
import { cx_holi as Holiday } from "../../entities/partner/cx_holi"
import { cx_part_holi as PartHoliday } from "../../entities/partner/cx_part_holi"
import { cx_pay_meth as PayMenthod } from "../../entities/partner/cx_pay_meth"
import { cx_part_pay_meth as PartPayMenthod } from "../../entities/partner/cx_part_pay_meth"
import { cx_proc as Procedure } from "../../entities/partner/cx_proc"
import { cx_part_proc as PartProcedure } from "../../entities/partner/cx_part_proc"
import { JoinAttribute } from "../../../node_modules/typeorm/query-builder/JoinAttribute";

export default class PartnerController {
    private partnerService: PartnerService;
    private cityService: ICityService;
    private wdayService: WdayService;
    private partWdayService: PartWdayService;
    private payMethodService: PayMethodService;
    private partPayMethService: PartPayMethService;
    private procedureService: ProcedureService;
    private partProcService: PartProcService;
    private holidayService: HolidayService;
    private partHoliService: PartHoliService;

    constructor() {
        this.partnerService = new PartnerService();
        this.cityService = new CityService();
        this.payMethodService = new PayMethodService();
        this.partPayMethService = new PartPayMethService();
        this.wdayService = new WdayService();
        this.partWdayService = new PartWdayService();
        this.procedureService = new ProcedureService();
        this.partProcService = new PartProcService();
        this.holidayService = new HolidayService();
        this.partHoliService = new PartHoliService();

    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get all Partners ==> GET");

        await this.partnerService.getPartners().then((result) =>
            MyUtil.handleSuccess(result, res)
        ).catch(err => next(err));

    };

    public postPartner = async (req: Request, res: Response) => {
        console.log("create a new partner ==> POST");
        var body = req.body;
        let holis = body.holis;
        let wdays = body.wdays;
        let pay_meth_names = body.pay_meth_names;
        let proc_names = body.proc_names;

        if (!(body && (body.city_id || body.city_name) && body.part_name && body.part_phon))
            MyUtil.handleError({ message: "No data!" }, res);
        else {
            let partner = new Partner();
            let wDayPart = new Array<PartWeekDay>();
            let procePart = new Array<PartProcedure>();
            let holiPart = new Array<PartHoliday>();
            let payMenthPart = new Array<PartPayMenthod>()

            let check1, check2, check3, check4, check = true;
            if (holis)
                await this.getPartHolidays(body.holis, res, holiPart)
                    .catch((err) => {
                        MyUtil.handleError(err, res)
                        check = false
                    })
                    .then((result) => check1 = result);
            if (wdays)
                await this.getPartWDays(wdays, res, wDayPart)
                    .catch((err) => {
                        MyUtil.handleError(err, res)
                        check = false
                    })
                    .then((result) => {
                        check2 = result
                    });
            if (proc_names)
                await this.getProducePart(proc_names, res, procePart)
                    .catch((err) => {
                        MyUtil.handleError(err, res)
                        check = false
                    })
                    .then((result) => check3 = result);
            if (pay_meth_names)
                await this.getPays(pay_meth_names, res, payMenthPart)
                    .catch((err) => {
                        MyUtil.handleError(err, res)
                        check = false
                    })
                    .then((result) => check4 = result);

            delete body["pay_meth_names"]
            delete body["wdays"]
            delete body["proc_names"]
            delete body["holis"]
            partner = body;
            partner["part_slug"] = MyUtil.string_to_slug(partner.part_name)
            let checkPartner = true;


            if (check) {
                await this.partnerService.getPartnerByName(partner.part_name)
                    .catch(err => MyUtil.handleError(err, res))
                    .then((result) => { if (result) checkPartner = false });
                if (!checkPartner) {
                    let err = { "message": "part_name already exist" };
                    MyUtil.handleError(err, res);
                } else {

                    let part_id;
                    // console.log(JSON.stringify(partner))
                    await this.partnerService.createPartner(partner)
                        .then((result) => { part_id = result.part_id })
                        .catch(err => MyUtil.handleError(err, res))

                    if (part_id) {
                        if (check1) {
                            this.setPartId(holiPart, part_id);
                            await this.partHoliService.createList(holiPart).catch((err) => MyUtil.handleError(err, res));
                        }
                        if (check2) {
                            this.setPartId(wDayPart, part_id);
                            await this.partWdayService.createList(wDayPart).catch((err) => MyUtil.handleError(err, res))
                        }
                        if (check3) {
                            this.setPartId(procePart, part_id);
                            await this.partProcService.createList(procePart).catch((err) => MyUtil.handleError(err, res))
                        }
                        if (check4) {
                            this.setPartId(payMenthPart, part_id);
                            await this.partPayMethService.createList(payMenthPart).catch((err) => MyUtil.handleError(err, res))

                        }
                    } else {
                        let err = { "message": "error" };
                        MyUtil.handleError(err, res);
                    }
                }
            }

        }
    }

    setPartId = (obj: any[], part_id: number) => {
        obj.map(function (item) {
            item.part_id = part_id;
            return item;
        })
    }

    getPartWDays = async (str: string, res: Response, wDayPart: Array<PartWeekDay>) => {
        let arr;
        let check = true;

        if (str != undefined) {
            arr = MyUtil.convertListMap(str);

            for (var i = 0; i < arr.length; i++) {
                let item = arr[i]
                let name = (item[0] + "").toString().trim();
                let option = await this.wdayService.getWeekDayByname(name).catch(err => MyUtil.handleError(err, res))
                let wDay = new PartWeekDay();

                if (option) {
                    wDay.wday_id = option ? option.wday_id : null;
                    wDay.part_wday_exta_fee = item[1];
                    wDayPart.push(wDay)
                } else {
                    check = false;
                    let err = { "message": "wday " + item[0] + " không tồn tại" };
                    MyUtil.handleError(err, res);
                }

            }
        }
        return check;
    }

    getPays = async (str: string, res: Response, result: Array<PartPayMenthod>) => {
        let arr;
        let check = true;

        if (str) {
            str = str.replace(/\/r\/n/g, '');
            arr = MyUtil.trimArray(str, ",");

            for (var i = 0; i < arr.length; i++) {
                let item = arr[i].toString().trim()

                let option = await this.payMethodService.getPayMethodByName(item).catch(err => MyUtil.handleError(err, res))

                let payMenth = new PartPayMenthod();
                if (option) {
                    payMenth.pay_meth_id = option ? option.pay_meth_id : null;
                    result.push(payMenth)
                } else {
                    check = false;
                    let err = { "message": "menth " + item + " không tồn tại" };
                    MyUtil.handleError(err, res);
                }

            }
        }
        return check;
    }

    getPartHolidays = async (str: string, res: Response, result: Array<PartHoliday>) => {
        let arr;
        let check = true;
        if (str && str !== undefined) {
            arr = MyUtil.convertListMap(str.trim());

            for (var i = 0; i < arr.length; i++) {
                let item = arr[i]
                let name = (item[0] + "").trim();
                let option = await this.holidayService.getHoliByName(name).catch(err => MyUtil.handleError(err, res))
                let partHoli = new PartHoliday();
                let holi = new Holiday();
                if (option) {
                    partHoli.holi_id = option ? option["holi_id"] : null;
                    partHoli.part_holi_exta_fee = item[1];
                    result.push(partHoli)
                } else {
                    check = false;
                    let err = { "message": "holi " + item[0] + " không tồn tại" };
                    MyUtil.handleError(err, res);
                }

            }
        }
        return check;
    }
    getProducePart = async (str: string, res: Response, result: Array<PartProcedure>) => {
        let arr, check = true;

        if (str && str !== "" && str !== undefined) {
            arr = MyUtil.convertListMap(str);
            check = true;

            for (var i = 0; i < arr.length; i++) {
                let item = arr[i]
                let name = (item[0] + "").toString().trim();

                let option = await this.procedureService.getProcedureByName(name.trim()).catch(err => MyUtil.handleError(err, res))
                let proce = new PartProcedure();

                if (option) {
                    proce.proc_id = option ? option.proc_id : null;
                    if (item.length > 1)
                        proce.part_proc_note = item[1];
                    result.push(proce)
                } else {
                    check = false;
                    let err = { "message": "produce " + item[0] + " not exits" };
                    MyUtil.handleError(err, res);
                }

            }
        }
        return check;
    }

    getDetailPartner = async (part_id: number) => {
        let partner;

        if (part_id) {
            let part_procs = [], part_pay_meths = [], part_wdays = [], part_holis = [];
            let procIds = [], payIds = [], wdayIds = [], holiIds = []
            let procs, pays, holis, ways
            partner = await this.partnerService.getPartnerById(part_id).catch(err => MyUtil.handleErrorFunction(err))
            await this.partProcService.findByPartId(part_id)
                .catch(err => MyUtil.handleErrorFunction(err))
                .then(result => {
                    let length = result ? result.length : 0;
                    for (let i = 0; i < length; i++) {
                        procIds.push(result[i].proc_id);

                    }
                    procs = result

                })
            for (let i = 0; i < procIds.length; i++) {
                await this.procedureService.getOne(procIds[i]).then(result => {
                    if (result) {
                        let procedure = {};
                        procedure["part_proc_id"] = procs[i].part_proc_id;
                        procedure["proc"] = result
                        procedure["part_proc_note"] = procs[i].part_proc_note;
                        part_procs.push(procedure)


                    };
                })
            }
            partner["part_procs"] = part_procs;

            //pay
            await this.partPayMethService.findByPartId(part_id)
                .catch(err => MyUtil.handleErrorFunction(err))
                .then(result => {
                    let length = result ? result.length : 0;
                    for (let i = 0; i < length; i++) {
                        payIds.push(result[i].pay_meth_id);

                    }

                })
            if (payIds.length > 0)
                await this.payMethodService.findIn(payIds).then(result => {
                    if (result) {
                        partner["part_pay_meths"] = result;
                    };
                })
            else{
                partner["part_pay_meths"] = [];
            }
            //wday
            await this.partWdayService.findByPartId(part_id)
                .catch(err => MyUtil.handleErrorFunction(err))
                .then(result => {
                    let length = result ? result.length : 0;
                    for (let i = 0; i < length; i++) {
                        wdayIds.push(result[i].wday_id);

                    }
                    ways = result

                })
            for (let i = 0; i < wdayIds.length; i++) {
                await this.wdayService.getOne(wdayIds[i]).then(result => {
                    if (result) {
                        let way = {};
                        way["part_way_id"] = ways[i].part_way_id;
                        way["wday"] = result
                        way["part_wday_exta_fee"] = ways[i].part_wday_exta_fee;
                        part_wdays.push(way)


                    };
                })
                .catch(err => MyUtil.handleErrorFunction(err))
            }
            partner["part_wdays"] = part_wdays;

            //holis
            await this.partHoliService.findByPartId(part_id)
                .catch(err => MyUtil.handleErrorFunction(err))
                .then(result => {
                    let length = result ? result.length : 0;
                    for (let i = 0; i < length; i++) {
                        holiIds.push(result[i].holi_id);

                    }
                    holis = result

                })
            for (let i = 0; i < holiIds.length; i++) {
                await this.holidayService.getOne(holiIds[i]).then(result => {
                    if (result) {
                        let holi = {};
                        holi["part_way_id"] = holis[i].part_holi_id;
                        holi["holi"] = result
                        holi["part_holi_exta_fee"] = holis[i].part_holi_exta_fee;
                        part_holis.push(holi)


                    };
                }).catch(err => MyUtil.handleErrorFunction(err))
            }
            partner["part_holis"] = part_holis;



        } else {
            let err = { message: "vhc_id not exits" }
            MyUtil.handleErrorFunction(err)
        }
        return partner;
    }

}
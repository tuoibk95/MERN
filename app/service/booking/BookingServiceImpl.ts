import IBookingService from "./IBookingService";
import { cx_book as Booking, cx_book } from "../../entities/booking/cx_book"
import BookingRepository from "../../repository/booking/BookingRepository";
import { cx_book_fedbak } from "../../entities/booking/cx_book_fedbak";
import BookingResDTO from "../../dto/booking/BookingResDTO";
import BookFedbakRepository from "../../repository/booking/BookFedbakRepository";
import { cx_book_prie_detl } from "../../entities/booking/cx_book_prie_detl";
import BookPriceDetailRepository from "../../repository/booking/BookPriceDetailRepository";
import { cx_book_stt } from "../../entities/booking/cx_book_stt";
import BookStatusRepository from "../../repository/booking/BookStatusRepository";
import BookingReqDTO from "../../dto/booking/BookingReqDTO";
import VehiclePartController from "../../controller/partner/VehiclePartController";
import { cx_part } from "../../entities/partner/cx_part";
import { MyUtil } from "../../utils/MyUtil";
import { cx_city } from "../../entities/partner/cx_city";
import CityRepository from "../../repository/partner/CityRepository";
import { cx_vhc_type } from "../../entities/vehicle/cx_vhc_type";
import { cx_vhc } from "../../entities/vehicle/cx_vhc";
import TypeVehicleRepository from "../../repository/vehicle/type/TypeVehicleRepository";
import { cx_book_prie_type } from "../../entities/booking/cx_book_prie_type";
import BookPriceTypeRepository from "../../repository/booking/BookPriceTypeRepository";

const distance = require('google-distance');

export default class BookingService implements IBookingService {

    private bookingRepository = new BookingRepository();
    private bookingFedbakRepository = new BookFedbakRepository();
    private bookingPriceDetailRepo = new BookPriceDetailRepository();
    private bookingStatusRepo = new BookStatusRepository();
    private vehiclePartController = new VehiclePartController();
    private cityRepository = new CityRepository();
    private typeRepository = new TypeVehicleRepository();
    private priceTypeRepo = new BookPriceTypeRepository();

    public async getAll() {
        var result = new Array<BookingResDTO>();
        await this.bookingRepository.getAll()
            .then( async books => {
                if (books.length > 0) {
                    for (let i = 0; i < books.length; i++){
                        await this.getDetailBooking(books[i])
                            .then(b => result.push(b))
                            .catch(err => console.log(err))
                    }
                }
            }).catch(err => {
                throw new Error(err)
            })
        return result;
    }

    public async getOne(id: number) {
        var result: BookingResDTO;
        await this.bookingRepository.getOne(id)
            .then(async booking => {
                result = await this.getDetailBooking(booking);
            })
            .catch(err => { throw new Error(err) })
        return result
    }

    public async create(bookReq: BookingReqDTO) {
        if (!bookReq) throw new Error("Request is null")
        var vhc_part_id = bookReq.getVhcPartId();
        var vehiclePartner = {};

        if (vhc_part_id > 0) await this.vehiclePartController.getDetailVehicle(vhc_part_id)
            .then(data => vehiclePartner = data)
            .catch(err => console.log(err));

        if (!vehiclePartner) throw new Error("Vehicle partner is not existed!");
        // var use_acc_id = bookReq.getUseAccId();
        // if (use_acc_id)
        var booking = new Booking();
        var vehicle = new cx_vhc();
        var partner = new cx_part();
        vehicle = vehiclePartner["vhc"];
        partner = vehiclePartner["part"];
        if (!(vehicle && partner)) throw new Error("Vehicle and Partner is not existed!")
        var rentalDateStr = bookReq.getBookRentDate();
        var returnDateStr = bookReq.getBookRetunDate();
        if (!(rentalDateStr && returnDateStr)) throw new Error("Rental Date and Return Date is null!!")
        var rentalDate = new Date(rentalDateStr);
        var returnDate = new Date(returnDateStr);
        if ((rentalDate.getTime() < new Date().getTime()) || (returnDate.getTime() < new Date().getTime()) || (returnDate.getTime() < rentalDate.getTime())) throw new Error("rental and return time is not invalid")

        // create booking
        booking.cstm_name = bookReq.getCstmName();
        booking.cstm_emai = bookReq.getCstmEmai();
        booking.cstm_phon = bookReq.getCstmPhon();
        booking.cstm_deli_addr = bookReq.getCstmDeliAddr();
        booking.cstm_deli_addr_lat = bookReq.getCstmDeliAddrLat();
        booking.cstm_deli_addr_lng = bookReq.getCstmDeliAddrLng();
        booking.cstm_pay_meth_id = bookReq.getCstmPayMethId();
        booking.part_id = partner.part_id;
        booking.part_name = partner.part_name;
        booking.city_id = partner.city_id;
        booking.city_name = partner.city_name;
        booking.vhc_type_id = vehicle.vhc_type_id;
        booking.vhc_type_name = vehicle.vhc_type_name
        console.log("rentalDate - returnDate" + rentalDate + " - " + returnDate)
        booking.book_rent_date = rentalDate;
        booking.book_retun_date = returnDate;

        booking.vhc_part_id = vehiclePartner["vhc_part_id"];
        booking.vhc_part_name = vehiclePartner["vhc_part_name"];
        booking.book_stt_id = 1;
        booking.book_day_num = this.getDayNum(rentalDate, returnDate, partner);
        booking.book_exta_hour_num = this.getExtaHourNum(rentalDate, returnDate, partner)
        booking.book_wday_num = this.getWdayNum(rentalDate, returnDate, partner)
        booking.book_holi_num = this.getHoliNum(rentalDate, returnDate, partner)
        booking.book_deli_form_id = bookReq.getBookDeliFormId();
        booking.promo_val = await this.calculatePromoPrice(bookReq);
        booking.promo_code = booking.promo_val > 0 ? bookReq.getPromoCode() : "";
        booking.book_prie_tota = 0;
        booking.book_crta = new Date();

        await this.bookingRepository.create(booking)
            .then(result => booking = result)
            .catch(err => { throw new Error(err) })

        if (!booking) throw new Error("Don't create a new booking");

        booking.book_code = await this.createBookingCode(booking);

        await this.bookingRepository.update(booking.book_id, booking)
            .then(result => {
                // console.log(result)
            })
            .catch(err => { throw new Error(err) })

        // create detail price
        var dtlPriceArr = new Array<cx_book_prie_detl>();
        var listPrice = new Array<cx_book_prie_type>();
        await this.priceTypeRepo.getAll()
            .then(result => listPrice = result)
            .catch(err => { throw new Error(err) })
        if (listPrice && listPrice.length > 0) {
            for (let i = 0; i < listPrice.length; i++) {
                await this.createDetailPrice(listPrice[i], booking, vehiclePartner)
                    .then(result => dtlPriceArr.push(result))
                    .catch(err => console.log(err))
            }
        }
        // calculate price total
        var sumPrice = this.getSumPrice(dtlPriceArr);

        booking.book_prie_tota = sumPrice;

        await this.bookingRepository.update(booking.book_id, booking)
            .then(result => {
                // console.log(result)
            })
            .catch(err => { throw new Error(err) })

        var newBooking: BookingResDTO
        await this.getByCode(booking.book_code)
            .then(res => newBooking = res)
            .catch(err => { throw new Error(err) })
        console.log(newBooking)
        return newBooking
    }

    public async getByCode(code: string) {
        var booking = new cx_book();
        await this.bookingRepository.findByCode(code)
            .then(data => booking = data[0])
            .catch(err => console.log(err))
        var detailBooking = await this.getDetailBooking(booking);
        return detailBooking;
    }

    public async calculateDeliPrice(bookingReq: BookingReqDTO): Promise<number> {
        if (!bookingReq) throw new Error("Data is not be empty!");
        var vhc_part_id = bookingReq.getVhcPartId();
        var vhcPart = await this.vehiclePartController.getDetailVehicle(vhc_part_id);
        if (!vhcPart) throw new Error("Vehicle's partner is not existed!");

        var partner = new cx_part()
        partner = vhcPart["part"];
        if (!partner) throw new Error("Partner is null!");

        var deli_part = bookingReq.getCstmDeliAddr();
        var deli_addr_lat = bookingReq.getCstmDeliAddrLat();
        var deli_addr_lng = bookingReq.getCstmDeliAddrLng();
        let distance, result;

        if (deli_addr_lat && deli_addr_lng) {
            var destination = deli_addr_lat + ',' + deli_addr_lng;
            var part_addr_lat = partner.part_lat;
            var part_addr_lng = partner.part_lng;

            var origin = part_addr_lat + ',' + part_addr_lng;

            let value = await this.getDistanceMatrix(origin, destination)
            distance = value;

        }
        else if (deli_part) {
            var destination = deli_part;
            var origin = partner.part_addr
            let value = await this.getDistanceMatrix(origin, destination)
            distance = value
        } else throw new Error("Customer's address is not null!");

        if (!distance) throw new Error("Not get distance object");
        result = partner.part_deli_over_km_fee * Math.ceil(distance["distanceValue"] / 1000)
        return result;
    }

    public async calculatePromoPrice(bookingReq: BookingReqDTO): Promise<any> {
        return 0
    }

    async createDetailPrice(detailPrice: cx_book_prie_type, booking: Booking, vhcPart) {
        if (!booking || !detailPrice || !vhcPart) throw new Error("Data is not be null!");

        var defaPrice = vhcPart["vhc_part_defa_prie"] || 0

        var dtlPrice = new cx_book_prie_detl();
        dtlPrice.book_id = booking.book_id;
        dtlPrice.book_prie_type_id = detailPrice.book_prie_type_id;
        var bookReq = new BookingReqDTO(booking);
        var isCheck = false

        switch (detailPrice.book_prie_type_code) {
            case "DAY_PRICE": {
                dtlPrice.prie_type_qaty = booking.book_day_num;
                dtlPrice.unit_prie = defaPrice;
                dtlPrice.detl_prie_tota = defaPrice * booking.book_day_num;
                isCheck = true;
                break;
            }
            case "WDAY_PRICE": {
                dtlPrice.prie_type_qaty = booking.book_wday_num;
                var wdayExtraFee = this.getWdayExtraFee(vhcPart);
                dtlPrice.unit_prie = wdayExtraFee;
                dtlPrice.detl_prie_tota = wdayExtraFee * booking.book_wday_num;
                isCheck = true;
                break;
            }
            case "HOLI_PRICE": {
                dtlPrice.prie_type_qaty = booking.book_holi_num;
                var holiExtraFee = this.getHoliExtraFee(vhcPart);
                dtlPrice.unit_prie = holiExtraFee;
                dtlPrice.detl_prie_tota = holiExtraFee * booking.book_holi_num;
                isCheck = true;
                break;
            }
            case "DELI_PRICE": {
                dtlPrice.prie_type_qaty = booking.book_deli_form_id;

                var deliPrice = await this.calculateDeliPrice(bookReq);
                dtlPrice.unit_prie = deliPrice;
                dtlPrice.detl_prie_tota = booking.book_deli_form_id * deliPrice;
                isCheck = true;
                break;
            }
            case "DAYPACK_PRICE": {
                dtlPrice.prie_type_qaty = 0;
                dtlPrice.unit_prie = 0;
                dtlPrice.detl_prie_tota = dtlPrice.prie_type_qaty * dtlPrice.unit_prie;
                isCheck = true;
                break;
            }
            case "PROMO_PRICE": {
                dtlPrice.prie_type_qaty = 0;
                dtlPrice.unit_prie = await this.calculatePromoPrice(bookReq);
                dtlPrice.detl_prie_tota = dtlPrice.prie_type_qaty * dtlPrice.unit_prie;
                isCheck = true;
                break;
            }
        }
        if (isCheck) return await this.bookingPriceDetailRepo.create(dtlPrice);
        else throw new Error("Error create detail price")

    }

    getDistanceMatrix = (origin, destination) => new Promise((resolve, reject) => {
        distance.apiKey = 'AIzaSyCPwj6RIUdzKliKtxHViKwnZn6RoopTp7A';
        distance.get(
            {
                index: 1,
                origin: origin,
                destination: destination
            }, (err, response) => {
                if (err)
                    reject(response);
                else {
                    console.log(response);
                    resolve(response)
                }

            })
    });


    getDetailBooking = async (booking: Booking) => {
        var result = new BookingResDTO(booking);
        console.log(result);

        var bookFedbak = new Array<cx_book_fedbak>();
        await this.bookingFedbakRepository.findByBookingId(result.getBookId())
            .then(feedbacks => bookFedbak = feedbacks)
            .catch(err => console.log(err))
        result.setBookFedBak(bookFedbak);

        var bookPriceDetails = new Array<cx_book_prie_detl>();
        await this.bookingPriceDetailRepo.findByBookingId(result.getBookId())
            .then(priceDetails => bookPriceDetails = priceDetails)
            .catch(err => console.log(err))
        result.setBookPrieDetl(bookPriceDetails);

        var bookStatus = new cx_book_stt();
        await this.bookingStatusRepo.getById(result.getBookStt().book_stt_id)
            .then(status => bookStatus = status)
            .catch(err => console.log(err))
        result.setBookStt(bookStatus);

        return result;
    }


    getDayNum = (rentalDate: Date, returnDate: Date, partner): number => {
        var rtlDate = rentalDate;
        var rtnDate = returnDate;
        var rtl = new Date(MyUtil.getDateFormatEn(rtlDate));
        var rtn =new Date(MyUtil.getDateFormatEn(rtnDate));
        console.log("rentalDate - dayNum", rtl);
        console.log("returnDate - dayNum", rtn);
        if (!rtl || !rtn || !partner) return 0
        var rtlTime = rtl.getTime();
        var rtnTime = rtn.getTime();
        if (rtnTime < rtlTime) return 0
        var dayNum = (rtnTime - rtlTime) / (24 * 1000 * 3600) + 1;
        return dayNum ? dayNum : 0
    }

    getWdayNum = (rentalDate: Date, returnDate: Date, partner): number => {
        if (!rentalDate || !returnDate || !partner) return 0
        var wdays = MyUtil.getWdays(rentalDate, returnDate, partner);
        var holis = MyUtil.getHolis(rentalDate, returnDate, partner);
        var holiIsWday = MyUtil.getDayNumHoliIsWday(wdays, holis);
        var wdayNum = wdays.length - holiIsWday;
        return wdayNum > 0 ? wdayNum : 0

    }

    getHoliNum = (rentalDate, returnDate, partner): number => {
        var rentalDate = rentalDate;
        var returnDate = returnDate;
        if (!rentalDate || !returnDate || !partner) return 0;
        var holis = MyUtil.getHolis(rentalDate, returnDate, partner);
        return holis ? holis.length : 0
    }

    getExtaHourNum = (rentalDate, returnDate, partner): number => {
        if (!rentalDate || !returnDate || !partner) return 0
        return 0
    }

    getWdayExtraFee = (vehicle) => {
        if (!vehicle) return 0;
        var price = 0;
        if (vehicle.part.part_wdays[0]) {
            var fee = vehicle.part.part_wdays[0].part_wday_exta_fee;
            if (MyUtil.isPercent(fee)) {
                price = vehicle.vhc_part_defa_prie * fee / 100;
            } else {
                price = fee;
            }
        }
        return price
    }


    getHoliExtraFee = (vehicle) => {
        if (!vehicle) return 0;
        var price = 0;
        if (vehicle.part.part_holis[0]) {
            var fee = vehicle.part.part_holis[0].part_holi_exta_fee;
            if (MyUtil.isPercent(fee)) {
                price += vehicle.vhc_part_defa_prie * fee / 100
            } else price += fee
        }
        return price
    }

    getSumPrice = (detailPrices: Array<cx_book_prie_detl>): number => {
        var sum = 0
        if (detailPrices && detailPrices.length > 0) {
            for (let i = 0; i < detailPrices.length ; i++){
                sum += detailPrices[i].detl_prie_tota
            }
        }
        return sum
    }

    createBookingCode = async (booking: Booking): Promise<string> => {
        var city = new cx_city();
        city = await this.cityRepository.findById(booking.city_id);
        if (!city) return "";

        var vhcType = new cx_vhc_type();
        vhcType = await this.typeRepository.getOne(booking.vhc_type_id)
        if (!vhcType) return "";
        var rentalDate = booking.book_rent_date;

        var { day, month } = MyUtil.getMonthDay(rentalDate);
        var dateStr = rentalDate.getFullYear().toString().substr(-2) + month
        var book_id = booking.book_id;
        book_id = book_id > 10000 ? book_id : 10000 + book_id
        var bookCode = city.city_code + vhcType.vhc_type_code + dateStr + book_id
        return bookCode ? bookCode : ""

    }

}
import {cx_book as Booking} from "../../entities/booking/cx_book"
import BookingResDTO from "../../dto/booking/BookingResDTO";
import BookingReqDTO from "../../dto/booking/BookingReqDTO";

export default interface IBookingService{
    getAll(): Promise<BookingResDTO[]>;
    getOne(id: number): Promise<BookingResDTO>;
    create(bookingReq: BookingReqDTO): Promise<BookingResDTO>
    getByCode(code: string): Promise<BookingResDTO>;
    calculateDeliPrice(bookingReq: BookingReqDTO): Promise<any>;
    calculatePromoPrice(bookingReq: BookingReqDTO): Promise<any>;
}
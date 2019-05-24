import { cx_book_fedbak } from "../../entities/booking/cx_book_fedbak";
import { Repository, getConnectionManager } from "typeorm";

export default class BookFedbakRepository {
    private bookFedbakRepository: Repository<cx_book_fedbak>;
    constructor() {
        this.bookFedbakRepository = getConnectionManager().get("chungxe_booking").getRepository(cx_book_fedbak);
    }

    public async getAll(){
        return await this.bookFedbakRepository.find();
    }

    public async findByBookingId(bookingId: number){
        return await this.bookFedbakRepository.find({"book_id": bookingId})
    }
}
import { Repository, getConnectionManager } from "typeorm";
import { cx_book_prie_detl } from "../../entities/booking/cx_book_prie_detl";

export default class BookPriceDetailRepository {
    private bookPriceDetailRepository: Repository<cx_book_prie_detl>;
    constructor() {
        this.bookPriceDetailRepository = getConnectionManager().get("chungxe_booking").getRepository(cx_book_prie_detl);
    }

    public async getAll(){
        return await this.bookPriceDetailRepository.find();
    }

    public async findByBookingId(bookingId: number){
        return await this.bookPriceDetailRepository.find({"book_id": bookingId})
    }

    public async create(detail: cx_book_prie_detl){
        return await this.bookPriceDetailRepository.save(detail)
    }
}
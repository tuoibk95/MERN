import { Repository, getConnectionManager } from "typeorm";
import { cx_book_prie_type } from "../../entities/booking/cx_book_prie_type";

export default class BookPriceTypeRepository {
    private bookPriceTypeRepository: Repository<cx_book_prie_type>;
    constructor() {
        this.bookPriceTypeRepository = getConnectionManager().get("chungxe_booking").getRepository(cx_book_prie_type);
    }

    public async getAll(){
        return await this.bookPriceTypeRepository.find();
    }

    public async findById(priceTypeId: number){
        return await this.bookPriceTypeRepository.find({book_prie_type_id: priceTypeId})
    }
}
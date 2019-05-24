import { cx_book_stt } from "../../entities/booking/cx_book_stt";
import { Repository, getConnectionManager } from "typeorm";

export default class BookStatusRepository {
    private bookStatusRepository: Repository<cx_book_stt>;
    constructor() {
        this.bookStatusRepository = getConnectionManager().get("chungxe_booking").getRepository(cx_book_stt);
    }

    public async getAll(){
        return await this.bookStatusRepository.find();
    }

    public async getById(id: number){
        return await this.bookStatusRepository.findOne({"book_stt_id": id})
    }
}
import {cx_book as Booking} from "../../entities/booking/cx_book"
import { Repository, getConnectionManager } from "typeorm";

export default class BookingRepository{
    private bookRepository: Repository<Booking>;
    constructor() {
        this.bookRepository = getConnectionManager().get("chungxe_booking").getRepository(Booking);
    }

    public async getAll() {
        return await this.bookRepository.find();
    }
    public async getOne(id: number){
        return await this.bookRepository.findOne({book_id: id})
    }
    public async create(booking: Booking){
        return await this.bookRepository.save(booking);
    }
    public async update(id: number, booking: Booking): Promise<any>{
        return await this.bookRepository.update(id, booking);
    }
    public async findByCode(code: string){
        return await this.bookRepository.find({book_code: code});
    }
}
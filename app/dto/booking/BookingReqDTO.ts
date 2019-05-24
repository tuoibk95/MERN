export default class BookingReqDTO {
    private use_acc_id: number;
    private cstm_name: string;
    private cstm_phon: string;
    private cstm_emai: string;
    private cstm_deli_addr: string;
    private cstm_deli_addr_lat: number;
    private cstm_deli_addr_lng: number;
    private cstm_pay_meth_id: number;
    private vhc_part_id: number;
    private vhc_part_name: string;
    private book_rent_date: string;
    private book_retun_date: string;
    private book_deli_form_id: number;
    private promo_code: string;

    constructor(reqBody) {
        this.use_acc_id = reqBody.use_acc_id;
        this.cstm_name = reqBody.cstm_name;
        this.cstm_phon = reqBody.cstm_phon;
        this.cstm_emai = reqBody.cstm_emai;
        this.cstm_deli_addr = reqBody.cstm_deli_addr;
        this.cstm_deli_addr_lat = reqBody.cstm_deli_addr_lat;
        this.cstm_deli_addr_lng = reqBody.cstm_deli_addr_lng;
        this.cstm_pay_meth_id = reqBody.cstm_pay_meth_id;
        this.vhc_part_id = reqBody.vhc_part_id;
        this.vhc_part_name = reqBody.vhc_part_name;
        this.book_rent_date = reqBody.book_rent_date;
        this.book_retun_date = reqBody.book_retun_date;
        this.book_deli_form_id = reqBody.book_deli_form_id;
        this.promo_code = reqBody.promo_code;
    }

    getUseAccId(){
        return this.use_acc_id
    }
    getCstmName(){
        return this.cstm_name
    }
    getCstmPhon(){
        return this.cstm_phon
    }
    getCstmEmai(){
        return this.cstm_emai
    }
    getCstmDeliAddr(){
        return this.cstm_deli_addr
    }
    getCstmDeliAddrLat(){
        return this.cstm_deli_addr_lat
    }
    getCstmDeliAddrLng(){
        return this.cstm_deli_addr_lng
    }
    getCstmPayMethId(){
        return this.cstm_pay_meth_id
    }
    getVhcPartId(){
        return this.vhc_part_id
    }
    getVhcPartName(){
        return this.vhc_part_name
    }
    getBookRentDate(){
        return this.book_rent_date
    }
    getBookRetunDate(){
        return this.book_retun_date
    }
    getBookDeliFormId(){
        return this.book_deli_form_id
    }
    getPromoCode(){
        return this.promo_code
    }

    setUseAccId(use_acc_id: number){
        this.use_acc_id = use_acc_id
    }
    setCstmName(cstm_name: string){
        this.cstm_name = cstm_name
    }
    setCstmPhon(cstm_phon: string){
        this.cstm_phon = cstm_phon
    }
    setCstmEmai(cstm_emai: string){
        this.cstm_emai = cstm_emai
    }
    setCstmDeliAddr(cstm_deli_addr: string){
        this.cstm_deli_addr = cstm_deli_addr
    }
    setCstmDeliAddrLat(cstm_deli_addr_lat: number){
        this.cstm_deli_addr_lat = cstm_deli_addr_lat
    }
    setCstmDeliAddrLng(cstm_deli_addr_lng: number){
        this.cstm_deli_addr_lng = cstm_deli_addr_lng
    }
    setCstmPaymethId(cstm_pay_meth_id: number){
        this.cstm_pay_meth_id = cstm_pay_meth_id
    }
    setVhcPartId(vhc_part_id: number){
        this.vhc_part_id = vhc_part_id
    }
    setVhcPartName(vhc_part_name: string){
        this.vhc_part_name = vhc_part_name
    }
    setBookRentDate(book_rent_date: string){
        this.book_rent_date = book_rent_date
    }
    setBookRetunDate(book_retun_date: string){
        this.book_retun_date = book_retun_date
    }
    setBookDeliFormId(book_deli_form_id: number){
        this.book_deli_form_id = book_deli_form_id
    }
    setPromoCode(promo_code: string){
        this.promo_code = promo_code
    }
}
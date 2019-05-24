import { cx_city as City } from "../../entities/partner/cx_city";

export default class PartnerReqDTO {

    private part_name: string;
    private part_phon: string;
    private part_emai: string;
    private part_logo: string;
    private city_id: number;
    private city_name: string;
    private part_addr: string;
    private part_lat: number;
    private part_lng: number;
    private part_ctac_name: string;
    private part_ctac_mobi: string;
    private part_pay_acc: string;
    private part_web: string;
    private part_stat_time: string;
    private part_end_time: string;
    private part_last_nigh_supt: boolean;
    private part_over_time_fee: number;
    private part_lim_km: number;
    private part_over_km_fee: number;
    private part_deli_free_km: number;
    private part_deli_over_km_fee: number;
    private part_polc: string;
    private part_slug: string;
    private proc_names: string[];
    private pay_meth_names: string[];
    private wday_ids: number[];
    private holi_ids: number[];
    private day_pack_ids: number[];

    constructor(req) {
         this.part_name = req.part_name;
         this.part_phon = req.part_phon;
         this.part_emai = req.part_emai;
         this.part_logo = req.part_logo;
         this.city_id = req.city_id;
         this.city_name = req.city_name
         this.part_addr = req.part_addr;
         this.part_lat = req.part_lat;
         this.part_lng = req.part_lng;
         this.part_ctac_name = req.part_ctac_name;
         this.part_ctac_mobi = req.part_ctac_mobi;
         this.part_pay_acc = req.part_pay_acc;
         this.part_web = req.part_web;
         this.part_stat_time = req.part_stat_time ? req.part_stat_time : "00:00";
         this.part_end_time = req.part_end_time ? req.part_stat_time: "23:59";
         this.part_last_nigh_supt = req.part_last_nigh_supt ? req.part_last_nigh_supt : 1;
         this.part_over_time_fee = req.part_over_time_fee;
         this.part_lim_km = req.part_lim_km ? req.part_lim_km : 300;
         this.part_over_km_fee = req.part_over_km_fee ? req.part_over_km_fee : 10000;
         this.part_deli_free_km = req.part_deli_free_km ? req.part_deli_free_km : 5 ;
         this.part_deli_over_km_fee = req.part_deli_over_km_fee ? req.part_deli_over_km_fee : 10000;
         this.part_polc = req.part_polc;
         this.part_slug = req.part_slug;
         this.proc_names = req.proc_names;
         this.pay_meth_names = req.pay_meth_names;
         this.wday_ids = req.wday_ids;
         this.holi_ids = req.holi_ids ;
         this.day_pack_ids = req.day_pack_ids;
    }

    public getPartName(): string{
        return this.part_name;
    }
    public setPartName(name: string): void{
        this.part_name = name
    }

    public getPartPhon(): string{
        return this.part_phon
    }
    public setPartPhon(phon: string): void{
        this.part_phon = phon
    }
    public getPartEmai(): string{
        return this.part_emai
    }
    public setPartEmai(emai: string): void{
        this.part_emai = emai
    }
    public getPartLogo(): string{
        return this.part_logo;
    }
    public setPartLogo(logo: string): void{
        this.part_logo = logo
    }
    public getCityId(): number{
        return this.city_id
    }
    public setCityId(city_id: number): void{
        this.city_id = city_id
    }
    public getCityName(): string{
        return this.city_name
    }
    public setCityName(city_name: string): void{
        this.city_name = city_name
    }
    public getPartAddr(): string{
        return this.part_addr
    }
    public setPartAddr(addr: string){
        this.part_addr = addr
    }
    public getPartLat(): number{
        return this.part_lat
    }
    public setPartLat(lat: number): void{
        this.part_lat = lat
    }
    public getPartLng(): number{
        return this.part_lng
    }
    public setPartLng(lng: number){
        this.part_lng = lng
    }
    public getPartCtacName(): string{
        return this.part_ctac_name
    }
    public setPartCtacName(ctac_name: string): void{
        this.part_ctac_name = ctac_name
    }
    public getPartCtacMobi(): string{
        return this.part_ctac_mobi
    }
    public setPartCtacMobi(ctac_mobi: string){
        this.part_ctac_mobi = ctac_mobi
    }
    public getPartPayAcc(): string{
        return this.part_pay_acc
    }
    public setPartPayAcc(pay_acc: string): void{
        this.part_pay_acc = pay_acc
    }
    public getPartWeb(): string{
        return this.part_web
    }
    public setPartWeb(web: string): void{
        this.part_web = web
    }
    public getPartStatTime(): string{
        return this.part_stat_time
    }
    public setPartStatTime(stat_time: string): void{
        this.part_stat_time = stat_time
    }
    public getPartEndTime(): string{
        return this.part_end_time
    }
    public setPartEndTime(end_time: string): void{
        this.part_end_time = end_time
    }
    public getPartLastNighSupt(): boolean{
        return this.part_last_nigh_supt
    }
    public setPartLastNighSupt(part_last_nigh_supt: boolean): void{
        this.part_last_nigh_supt = part_last_nigh_supt
    }
    public getPartOverTimeFee(): number{
        return this.part_over_time_fee
    }
    public setPartOverTimeFee(part_over_time_fee: number): void{
        this.part_over_time_fee = part_over_time_fee
    }
    public getPartLimKm(): number{
        return this.part_lim_km
    }
    public setPartLimKm(part_lim_km: number){
        this.part_lim_km = part_lim_km
    }
    public getPartOverKmFee(): number{
        return this.part_over_km_fee
    }
    public setPartOverKmFee(part_over_km_fee: number){
        this.part_over_km_fee = part_over_km_fee
    }
    public getPartDeliFreeKm(): number{
        return this.part_deli_free_km
    }
    public setPartDeliFreeKm(part_deli_free_km: number){
        this.part_deli_free_km = part_deli_free_km
    }
    public getPartDeliOverKmFee(): number{
        return this.part_deli_over_km_fee
    }
    public setPartDeliOverKmFee(part_deli_over_km_fee: number){
        this.part_deli_over_km_fee = part_deli_over_km_fee
    }
    public getPartPolc(): string{
        return this.part_polc
    }
    public setPartPolc(part_polc: string){
        this.part_polc = part_polc
    }
    public getPartSlug(): string{
        return this.part_slug
    }
    public setPartSlug(part_slug: string){
        this.part_slug = part_slug
    }
    public getProcNames(): string[]{
        return this.proc_names
    }
    public setProcNames(proc_names: string[]){
        this.proc_names = proc_names
    }
    public getPayMethNames(): string[]{
        return this.pay_meth_names
    }
    public setPayMethNames(pay_meth_names: string[]){
        this.pay_meth_names = pay_meth_names
    }
    public getWdayIds(): number[]{
        return this.wday_ids
    }
    public setWdayIds(wday_ids: number[]){
        this.wday_ids = wday_ids
    }
    public getHoliIds(): number[]{
        return this.holi_ids
    }
    public setHoliIds(holi_ids: number[]){
        this.holi_ids = holi_ids
    }
    public getDayPackIds(): number[]{
        return this.day_pack_ids
    }
    public setDayPacIds(day_pack_ids: number[]){
        this.day_pack_ids = day_pack_ids
    }

}
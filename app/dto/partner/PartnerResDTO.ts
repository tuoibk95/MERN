import { cx_city as City } from "../../entities/partner/cx_city";
import { cx_pay_meth as PayMethod } from "../../entities/partner/cx_pay_meth";
import { cx_wday as WeekDay } from "../../entities/partner/cx_wday";
import { cx_holi as Holiday } from "../../entities/partner/cx_holi";
import { cx_day_pack as DayPack } from "../../entities/partner/cx_day_pack";
import { cx_proc as Procedure } from "../../entities/partner/cx_proc";
import { cx_part } from "../../entities/partner/cx_part";

export default class PartnerResDTO {

    private part_id: number;
    private part_name: string;
    private part_phon: string;
    private part_emai: string;
    private part_logo: string;
    private city: City;
    private part_addr: string;
    private part_lat: number;
    private part_lng: number;
    private part_ctac_name: string;
    private part_ctac_mobi: string;
    private part_pay_acc: string;
    private part_web: string;
    private part_stat_time: string;
    private part_end_time: string;
    private part_last_nigh_supt: number;
    private part_over_time_fee: number;
    private part_lim_km: number;
    private part_over_km_fee: number;
    private part_deli_free_km: number;
    private part_deli_over_km_fee: number;
    private part_polc: string;
    private part_slug: string;
    private part_crta: Date;
    private part_upda: Date;
    private part_del: Date;
    private procedures: Procedure[];
    private pay_meths: PayMethod[];
    private wdays: WeekDay[];
    private holis: Holiday[];
    private day_packs: DayPack[];

    constructor(){}
//     constructor(partner) {
//         this.part_name = partner.part_name;
//         this.part_phon = partner.part_phon;
//         this.part_emai = partner.part_emai;
//         this.part_logo = partner.part_logo;
//         this.city.city_id = partner.city_id;
//         this.city.city_name = partner.city_name;
//         this.part_addr = partner.part_addr;
//         this.part_lat = partner.part_lat;
//         this.part_lng = partner.part_lng;
//         this.part_ctac_name = partner.part_ctac_name;
//         this.part_ctac_mobi = partner.part_ctac_mobi;
//         this.part_pay_acc = partner.part_pay_acc;
//         this.part_web = partner.part_web;
//         this.part_stat_time = partner.part_stat_time;
//         this.part_end_time = partner.part_end_time;
//         this.part_last_nigh_supt = partner.part_last_nigh_supt;
//         this.part_over_time_fee = partner.part_over_time_fee;
//         this.part_lim_km = partner.part_lim_km;
//         this.part_over_km_fee = partner.part_over_km_fee;
//         this.part_deli_free_km = partner.part_deli_free_km;
//         this.part_deli_over_km_fee = partner.part_deli_over_km_fee;
//         this.part_polc = partner.part_polc;
//         this.part_slug = partner.part_slug;
//         this.part_crta = partner.part_crta;
//         this.part_upda = partner.part_upda;
//    }
    public getPartId(): number{
        return this.part_id;
    }
    public setPartId(id: number): void{
        this.part_id = id
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
    public getCity(): City{
        return this.city
    }
    public setCity(city: City): void{
        this.city = city
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
    public getPartLastNighSupt(): number{
        return this.part_last_nigh_supt
    }
    public setPartLastNighSupt(part_last_nigh_supt: number): void{
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
    public getProcedures(): Procedure[]{
        return this.procedures
    }
    public setProcedures(procedures: Procedure[]){
        this.procedures = procedures
    }
    public getPayMeths(): PayMethod[]{
        return this.pay_meths
    }
    public setPayMeths(pay_meths: PayMethod[]){
        this.pay_meths = pay_meths
    }
    public getWdays(): WeekDay[]{
        return this.wdays
    }
    public setWdays(wdays: WeekDay[]){
        this.wdays = wdays
    }
    public getHolis(): Holiday[]{
        return this.holis
    }
    public setHolis(holis: Holiday[]){
        this.holis = holis
    }
    public getDayPacks(): DayPack[]{
        return this.day_packs
    }
    public setDayPacks(day_packs: DayPack[]){
        this.day_packs = day_packs
    }

}
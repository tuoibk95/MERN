import { cx_city as City } from "../../entities/partner/cx_city";

export default class PartnerReqDTO {

    private part_id: number;
    private vhc_type_id: number;
    private part_name: string;
    private part_phon: string;
    private part_emai: string;
    private part_logo: string;
    private city_id: number;
    private city_name: string;
    private part_lat: number;
    private part_lng: number;
    private part_addr: string;
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
    private part_deli_home: number;
    private part_crta: Date;
    private part_upda: Date;
    private part_del: Date;
    private proc_names: string[];
    private pay_meth_names: string[];
    private wdays: string[];
    private holis: string[];
    private day_packs: string[];

    constructor(arr) {
        if (arr[0])
            this.part_id = arr[0]
        this.part_name = arr[1];
        this.vhc_type_id = arr[2]
        this.part_phon = arr[3];
        this.part_emai = arr[4];
        this.part_logo = arr[5];
        this.city_id = arr[6];
        this.city_name = arr[7]
        this.part_lat = arr[8];
        this.part_lng = arr[9];
        this.part_addr = arr[10];
        this.part_ctac_name = arr[11]
        this.part_ctac_mobi = arr[12]
        this.part_pay_acc = arr[13]
        this.part_web = arr[14]
        this.part_stat_time = arr[15] ? arr[15] : "00:00";
        this.part_end_time = arr[16] ? arr[16] : "23:59";
        this.part_last_nigh_supt = arr[17] ? arr[17] : 1;
        this.part_over_time_fee = arr[18];
        this.part_lim_km = arr[19];
        this.part_over_km_fee = arr[20];
        this.part_deli_free_km = arr[21];
        this.part_deli_over_km_fee = arr[22];
        this.part_deli_home = arr[23]
        this.part_polc = arr[24];
        this.part_crta = arr[25];
        this.part_upda = arr[26];
        this.part_del = arr[27];
        this.pay_meth_names = arr[28];
        this.proc_names = arr[29];
        this.wdays = arr[30];
        this.holis = arr[31];
    
    }

    public getPartName(): string {
        return this.part_name;
    }
    public setPartName(name: string): void {
        this.part_name = name
    }

    public getPartPhon(): string {
        return this.part_phon
    }
    public setPartPhon(phon: string): void {
        this.part_phon = phon
    }
    public getPartEmai(): string {
        return this.part_emai
    }
    public setPartEmai(emai: string): void {
        this.part_emai = emai
    }
    public getPartLogo(): string {
        return this.part_logo;
    }
    public setPartLogo(logo: string): void {
        this.part_logo = logo
    }
    public getCityId(): number {
        return this.city_id
    }
    public setCityId(city_id: number): void {
        this.city_id = city_id
    }
    public getCityName(): string {
        return this.city_name
    }
    public setCityName(city_name: string): void {
        this.city_name = city_name
    }
    public getPartAddr(): string {
        return this.part_addr
    }
    public setPartAddr(addr: string) {
        this.part_addr = addr
    }
    public getPartLat(): number {
        return this.part_lat
    }
    public setPartLat(lat: number): void {
        this.part_lat = lat
    }
    public getPartLng(): number {
        return this.part_lng
    }
    public setPartLng(lng: number) {
        this.part_lng = lng
    }
    public getPartCtacName(): string {
        return this.part_ctac_name
    }
    public setPartCtacName(ctac_name: string): void {
        this.part_ctac_name = ctac_name
    }
    public getPartCtacMobi(): string {
        return this.part_ctac_mobi
    }
    public setPartCtacMobi(ctac_mobi: string) {
        this.part_ctac_mobi = ctac_mobi
    }
    public getPartPayAcc(): string {
        return this.part_pay_acc
    }
    public setPartPayAcc(pay_acc: string): void {
        this.part_pay_acc = pay_acc
    }
    public getPartWeb(): string {
        return this.part_web
    }
    public setPartWeb(web: string): void {
        this.part_web = web
    }
    public getPartStatTime(): string {
        return this.part_stat_time
    }
    public setPartStatTime(stat_time: string): void {
        this.part_stat_time = stat_time
    }
    public getPartEndTime(): string {
        return this.part_end_time
    }
    public setPartEndTime(end_time: string): void {
        this.part_end_time = end_time
    }
    public getPartLastNighSupt(): boolean {
        return this.part_last_nigh_supt
    }
    public setPartLastNighSupt(part_last_nigh_supt: boolean): void {
        this.part_last_nigh_supt = part_last_nigh_supt
    }
    public getPartOverTimeFee(): number {
        return this.part_over_time_fee
    }
    public setPartOverTimeFee(part_over_time_fee: number): void {
        this.part_over_time_fee = part_over_time_fee
    }
    public getPartLimKm(): number {
        return this.part_lim_km
    }
    public setPartLimKm(part_lim_km: number) {
        this.part_lim_km = part_lim_km
    }
    public getPartOverKmFee(): number {
        return this.part_over_km_fee
    }
    public setPartOverKmFee(part_over_km_fee: number) {
        this.part_over_km_fee = part_over_km_fee
    }
    public getPartDeliFreeKm(): number {
        return this.part_deli_free_km
    }
    public setPartDeliFreeKm(part_deli_free_km: number) {
        this.part_deli_free_km = part_deli_free_km
    }
    public getPartDeliOverKmFee(): number {
        return this.part_deli_over_km_fee
    }
    public setPartDeliOverKmFee(part_deli_over_km_fee: number) {
        this.part_deli_over_km_fee = part_deli_over_km_fee
    }
    public getPartPolc(): string {
        return this.part_polc
    }
    public setPartPolc(part_polc: string) {
        this.part_polc = part_polc
    }
   
    public getProcNames(): string[] {
        return this.proc_names
    }
    public setProcNames(proc_names: string[]) {
        this.proc_names = proc_names
    }
    public getPayMethNames(): string[] {
        return this.pay_meth_names
    }
    public setPayMethNames(pay_meth_names: string[]) {
        this.pay_meth_names = pay_meth_names
    }
    public getWdayIds(): string[] {
        return this.wdays
    }
    public setWdayIds(wdays: string[]) {
        this.wdays = wdays
    }
    public getHoliIds(): string[] {
        return this.holis
    }
    public setHoliIds(holis: string[]) {
        this.holis = holis
    }
    public getDayPackIds(): string[] {
        return this.day_packs
    }
    public setDayPacIds(day_packs: string[]) {
        this.day_packs = day_packs
    }

    public getDeliHome(): number {
        return this.part_deli_home
    }
    public setDeliHome(part_deli_home: number) {
        this.part_deli_home = part_deli_home
    }

}
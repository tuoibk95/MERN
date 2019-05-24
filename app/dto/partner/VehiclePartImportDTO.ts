
export default class VehicleImportDTO {
    private vhc_part_id: number
    private vhc_part_name: string
    private part_id: number
    private part_name: string
    private vhc_id: number//get
    private vhc_name: string
    private vhc_bran_name: string//
    private vhc_modl_name: string//
    private vhc_part_year: number
    private vhc_part_depo: number
    private vhc_part_defa_prie: number
    private vhc_part_qaty_tota: number
    private vhc_part_quaty_aval: number
    private vhc_part_polc: string
    private vhc_part_prty: number
    private vhc_part_hide: boolean
    private vhc_part_slug: string
    private vhc_part_crta: Date
    private vhc_part_upda: Date
    private vhc_part_del: Date


    constructor(arr) {
        if (arr[4])
            this.vhc_part_name = arr[3] + " " + arr[4] + " " + arr[5] + " " + arr[6]
        else
            this.vhc_part_name = arr[3] + " " + arr[5] + arr[6]
        this.vhc_part_id = Number(arr[0]);
        this.part_id = Number(arr[1]);
        this.part_name = arr[2];
        this.vhc_bran_name =arr[3];
        this.vhc_modl_name= arr[4];
        this.vhc_name = arr[5];
        this.vhc_part_year = Number(arr[6]);
        this.vhc_part_depo = arr[7];
        this.vhc_part_defa_prie =Number(arr[8]);
        this.vhc_part_qaty_tota = Number(arr[9]);
        this.vhc_part_quaty_aval = Number(arr[10]);
        this.vhc_part_polc = arr[11];
        this.vhc_part_prty = arr[12] ? Number(arr[12]):null ;
        this.vhc_part_hide = arr[13]?arr[13]:0;
        this.vhc_part_crta = arr[14];
        this.vhc_part_upda = arr[15];
        this.vhc_part_del = arr[16];
    }


    get getVehiclePartId(): number {
        return this.vhc_part_id;
    }

    get getVehiclePartName(): string {
        return this.vhc_part_name;
    }

    get getVehicleId(): number {
        return this.vhc_id;
    }

    get getVehicleName(): string {
        return this.vhc_name;
    }

    get getPartId(): number {
        return this.part_id;
    }

    get getPartName(): string {
        return this.part_name;
    }

    get getVehiclePartYear(): number {
        return this.vhc_part_year;
    }

    get getVehicleDepo(): number {
        return this.vhc_part_depo;
    }

    get getVehicleDefaPrice(): number {
        return this.vhc_part_defa_prie;
    }

    get getQuatyTotal(): number {
        return this.vhc_part_qaty_tota;
    }

    get getQuatyAval(): number {
        return this.vhc_part_quaty_aval;
    }

    get getPolc(): string {
        return this.vhc_part_polc;
    }

    get getPriority(): number {
        return this.vhc_part_prty;
    }

    get getHide(): boolean {
        return this.vhc_part_hide;
    }

    get getSlug(): string {
        return this.vhc_part_slug;
    }

    get getCrta(): Date {
        return this.vhc_part_crta;
    }

    get getUpda(): Date {
        return this.vhc_part_upda;
    }

    get getDel(): Date {
        return this.vhc_part_del;
    }
}



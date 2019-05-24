
export default class VehicleImportDTO {

    private vhc_id?: number
    private vhc_name: string
    private vhc_type_id: number
    private vhc_type_name: string
    private vhc_bran_id: number
    private vhc_bran_name: string
    private vhc_modl_id: number
    private vhc_modl_name: string
    private vhc_egin_num: number
    private vhc_tms_id: number
    private vhc_tms_name: string
    private vhc_seat_id: number
    private vhc_seat_num: string
    private vhc_fuel_id: number
    private vhc_fuel_name: string
    private vhc_fuel_csum_num: string
    private vhc_dgn_id: number
    private vhc_dgn_name: string
    private vhc_des: string
    private vhc_crta: Date
    private vhc_upda?: Date
    private vhc_del?: Date
    private vhc_polc: string
    private vhc_slug: string
    private vhc_prty: number
    private vhc_hide: boolean
    private options: string
    private images: string



    constructor(arr) {
        if (arr[0])
            this.vhc_id = arr[0]
        
        this.vhc_type_id = arr[1]
        this.vhc_type_name = arr[2]
        this.vhc_bran_name = arr[3]
        this.vhc_bran_id = arr[4]
        this.vhc_modl_name = arr[5]
        this.vhc_modl_id = arr[6]
        this.vhc_name = arr[7]
        this.vhc_egin_num = parseFloat(arr[8])
        this.vhc_tms_id = arr[9]
        this.vhc_tms_name = arr[10]
        this.vhc_seat_id = arr[11]
        this.vhc_seat_num = arr[12]
        this.vhc_fuel_id = arr[13]
        this.vhc_fuel_name = arr[14]
        this.vhc_fuel_csum_num = arr[15]
        this.vhc_dgn_id = arr[16]
        this.vhc_dgn_name = arr[17]
        this.vhc_des = arr[18]
        this.vhc_polc = arr[19]
        this.vhc_prty = arr[20]
        this.vhc_hide = arr[21]
        this.vhc_crta = arr[22] ? arr[22] : null
        this.vhc_upda = arr[23] ? arr[23] : null
        this.vhc_del = arr[24] ? arr[24] : null
        this.options = arr[26]
        this.images = arr[25]
    }


    get getId(): number {
        return this.vhc_id;
    }

    get getName(): string {
        return this.vhc_name;
    }



}



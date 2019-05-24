export default class MotoImportDTO {
  private vhc_id?: number
  private vhc_name: string
  private vhc_type_id: number
  private vhc_type_name: string
  private vhc_bran_id: number
  private vhc_bran_name: string
  private vhc_egin_num: number
  private vhc_tms_id: number
  private vhc_tms_name: string
  private vhc_fuel_id: number
  private vhc_fuel_name: string
  private vhc_des: string
  private vhc_polc: string
  private vhc_slug: string
  private vhc_prty: number
  private vhc_hide: boolean
  private vhc_crta: Date
  private vhc_upda?: Date
  private vhc_del?: Date
  private options: string
  private images: string




  constructor(arr) {
    if (arr[0])
      this.vhc_id = arr[0];
   
    this.vhc_type_id = arr[1];
    this.vhc_type_name = arr[2];
    this.vhc_bran_id = arr[3];
    this.vhc_bran_name = arr[4];
    this.vhc_name = arr[5];
    this.vhc_egin_num = arr[6];
    this.vhc_tms_id = arr[7];
    this.vhc_tms_name = arr[8];
    this.vhc_fuel_id = arr[9];
    this.vhc_fuel_name = arr[10];
    this.vhc_des = arr[11];
    this.vhc_polc = arr[12];
    this.vhc_prty = arr[13];
    this.vhc_hide = arr[14];
    this.vhc_crta = arr[15];//
    this.vhc_upda = arr[16] ? arr[16] : null;
    this.vhc_del = arr[17] ? arr[17] : null;
    this.images = arr[18]
    this.options = arr[19]

  }


  get getId(): number {
    return this.vhc_id;
  }

  get getName(): string {
    return this.vhc_name;
  }



}



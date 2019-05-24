import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_part",{schema:"chungxe_partner"})
@Index("part_name_UNIQUE",["part_name",],{unique:true})
@Index("part_phon_UNIQUE",["part_phon",],{unique:true})
export class cx_part {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"part_id"
        })
    part_id:number;
        
    @Column("int",{ 
        nullable:false,
        name:"vhc_type_id"
        })
    vhc_type_id:number|1;

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"part_name"
        })
    part_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"part_phon"
        })
    part_phon:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"part_emai"
        })
    part_emai:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"part_logo"
        })
    part_logo:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"city_id"
        })
    city_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"city_name"
        })
    city_name:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"part_lat"
        })
    part_lat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"part_lng"
        })
    part_lng:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"part_addr"
        })
    part_addr:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"part_ctac_name"
        })
    part_ctac_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"part_ctac_mobi"
        })
    part_ctac_mobi:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"part_pay_acc"
        })
    part_pay_acc:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"part_web"
        })
    part_web:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"part_stat_time"
        })
    part_stat_time:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"part_end_time"
        })
    part_end_time:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"part_last_nigh_supt"
        })
    part_last_nigh_supt:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"part_over_time_fee"
        })
    part_over_time_fee:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"part_lim_km"
        })
    part_lim_km:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"part_over_km_fee"
        })
    part_over_km_fee:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"part_deli_free_km"
        })
    part_deli_free_km:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"part_deli_over_km_fee"
        })
    part_deli_over_km_fee:number | null;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"part_deli_home"
        })
    part_deli_home:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"part_polc"
        })
    part_polc:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"part_slug"
        })
    part_slug:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"part_crta"
        })
    part_crta:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"part_upda"
        })
    part_upda:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"part_del"
        })
    part_del:string | null;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc",{schema:"chungxe_vehicle"})
export class cx_vhc {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_id"
        })
    vhc_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"vhc_name"
        })
    vhc_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_type_id"
        })
    vhc_type_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"vhc_type_name"
        })
    vhc_type_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_bran_id"
        })
    vhc_bran_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"vhc_bran_name"
        })
    vhc_bran_name:string;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_modl_id"
        })
    vhc_modl_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_modl_name"
        })
    vhc_modl_name:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"vhc_egin_num"
        })
    vhc_egin_num:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_tms_id"
        })
    vhc_tms_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_tms_name"
        })
    vhc_tms_name:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_seat_id"
        })
    vhc_seat_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_seat_num"
        })
    vhc_seat_num:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_fuel_id"
        })
    vhc_fuel_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_fuel_name"
        })
    vhc_fuel_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_fuel_csum_num"
        })
    vhc_fuel_csum_num:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_dgn_id"
        })
    vhc_dgn_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_dgn_name"
        })
    vhc_dgn_name:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_des"
        })
    vhc_des:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_polc"
        })
    vhc_polc:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_slug"
        })
    vhc_slug:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_prty"
        })
    vhc_prty:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        name:"vhc_hide"
        })
    vhc_hide:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"vhc_crta"
        })
    vhc_crta:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"vhc_upda"
        })
    vhc_upda:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"vhc_del"
        })
    vhc_del:Date | null;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_part",{schema:"chungxe_partner"})
export class cx_vhc_part {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_part_id"
        })
    vhc_part_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"vhc_part_name"
        })
    vhc_part_name:string;
        

    @Column("int",{ 
        nullable:false,
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
        name:"part_id"
        })
    part_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"part_name"
        })
    part_name:string;
        

    @Column("year",{ 
        nullable:false,
        name:"vhc_part_year"
        })
    vhc_part_year:number;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_part_depo"
        })
    vhc_part_depo:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_part_defa_prie"
        })
    vhc_part_defa_prie:number | null;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"vhc_part_qaty_tota"
        })
    vhc_part_qaty_tota:number;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"vhc_part_qaty_aval"
        })
    vhc_part_qaty_aval:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_part_polc"
        })
    vhc_part_polc:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_part_prty"
        })
    vhc_part_prty:number | null;
        

    @Column("tinyint",{ 
        nullable:true,
        default:"0",
        name:"vhc_part_hide"
        })
    vhc_part_hide:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_part_slug"
        })
    vhc_part_slug:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"vhc_part_crta"
        })
    vhc_part_crta:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"vhc_part_upda"
        })
    vhc_part_upda:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"vhc_part_del"
        })
    vhc_part_del:Date | null;
        
}

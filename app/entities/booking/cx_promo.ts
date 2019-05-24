import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_promo",{schema:"chungxe_booking"})
@Index("promo_code_UNIQUE",["promo_code",],{unique:true})
export class cx_promo {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"promo_id"
        })
    promo_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:255,
        name:"promo_code"
        })
    promo_code:string;
        

    @Column("int",{ 
        nullable:false,
        name:"promo_val"
        })
    promo_val:number;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_id"
        })
    vhc_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_part_id"
        })
    vhc_part_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"part_id"
        })
    part_id:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"promo_active"
        })
    promo_active:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"promo_expire"
        })
    promo_expire:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"promo_crta"
        })
    promo_crta:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"promo_upda"
        })
    promo_upda:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"promo_del"
        })
    promo_del:Date | null;
        
}

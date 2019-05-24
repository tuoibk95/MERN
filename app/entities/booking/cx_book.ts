import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId, PrimaryGeneratedColumn} from "typeorm";


@Entity("cx_book",{schema:"chungxe_booking"})
@Index("book_code_UNIQUE",["book_code",],{unique:true})
export class cx_book {

    @PrimaryGeneratedColumn()
    book_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        length:255,
        name:"book_code"
        })
    book_code:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"use_acc_id"
        })
    use_acc_id:number | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"cstm_name"
        })
    cstm_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"cstm_phon"
        })
    cstm_phon:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"cstm_emai"
        })
    cstm_emai:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"cstm_deli_addr"
        })
    cstm_deli_addr:string | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"cstm_deli_addr_lat"
        })
    cstm_deli_addr_lat:number | null;
        

    @Column("float",{ 
        nullable:true,
        precision:12,
        name:"cstm_deli_addr_lng"
        })
    cstm_deli_addr_lng:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"cstm_pay_meth_id"
        })
    cstm_pay_meth_id:number;
        

    @Column("int",{ 
        nullable:false,
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
        name:"part_id"
        })
    part_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"part_name"
        })
    part_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"city_id"
        })
    city_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"city_name"
        })
    city_name:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_type_id"
        })
    vhc_type_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"vhc_type_name"
        })
    vhc_type_name:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"book_rent_date"
        })
    book_rent_date:Date;
        

    @Column("timestamp",{ 
        nullable:false,
        default:"0000-00-00 00:00:00",
        name:"book_retun_date"
        })
    book_retun_date:Date;
        

    @Column("int",{ 
        nullable:true,
        name:"book_day_num"
        })
    book_day_num:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"book_exta_hour_num"
        })
    book_exta_hour_num:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"book_wday_num"
        })
    book_wday_num:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"book_holi_num"
        })
    book_holi_num:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"book_deli_form_id"
        })
    book_deli_form_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"promo_code"
        })
    promo_code:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"promo_val"
        })
    promo_val:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"book_stt_id"
        })
    book_stt_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"book_prie_tota"
        })
    book_prie_tota:number | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"book_crta"
        })
    book_crta:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"book_upda"
        })
    book_upda:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"book_del"
        })
    book_del:Date | null;
        
}

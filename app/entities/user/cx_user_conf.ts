import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_conf",{schema:"chungxe_user"})
export class cx_user_conf {

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_conf_aval_from"
        })
    user_conf_aval_from:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_conf_aval_to"
        })
    user_conf_aval_to:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_conf_code"
        })
    user_conf_code:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"user_conf_crta"
        })
    user_conf_crta:Date | null;
        

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_conf_id"
        })
    user_conf_id:number;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"user_conf_upda"
        })
    user_conf_upda:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_conf_val_cn"
        })
    user_conf_val_cn:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_conf_val_en"
        })
    user_conf_val_en:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_conf_val_vn"
        })
    user_conf_val_vn:string | null;
        
}

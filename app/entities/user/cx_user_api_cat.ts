import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_api_cat",{schema:"chungxe_user"})
export class cx_user_api_cat {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_api_cat_id"
        })
    user_api_cat_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_api_cat_name"
        })
    user_api_cat_name:string | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"user_api_crta"
        })
    user_api_crta:Date | null;
        

    @Column("timestamp",{ 
        nullable:true,
        name:"user_api_upda"
        })
    user_api_upda:Date | null;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_api",{schema:"chungxe_user"})
export class cx_user_api {

    @Column("int",{ 
        nullable:true,
        name:"user_api_cat_id"
        })
    user_api_cat_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_api_code"
        })
    user_api_code:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_api_des"
        })
    user_api_des:string | null;
        

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_api_id"
        })
    user_api_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_api_link"
        })
    user_api_link:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_api_name"
        })
    user_api_name:string | null;
        
}

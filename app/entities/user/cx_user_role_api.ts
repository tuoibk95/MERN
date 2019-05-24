import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_role_api",{schema:"chungxe_user"})
export class cx_user_role_api {

    @Column("int",{ 
        nullable:true,
        name:"user_api_id"
        })
    user_api_id:number | null;
        

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_role_api_id"
        })
    user_role_api_id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"user_role_id"
        })
    user_role_id:number | null;
        
}

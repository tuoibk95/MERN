import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_role",{schema:"chungxe_user"})
export class cx_user_role {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_role_id"
        })
    user_role_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_role_name"
        })
    user_role_name:string | null;
        
}

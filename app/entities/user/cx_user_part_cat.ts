import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_part_cat",{schema:"chungxe_user"})
export class cx_user_part_cat {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_part_cat_id"
        })
    user_part_cat_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_part_cat_name"
        })
    user_part_cat_name:string | null;
        
}

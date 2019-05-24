import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_user_part",{schema:"chungxe_user"})
export class cx_user_part {

    @Column("int",{ 
        nullable:true,
        name:"rate_part_id"
        })
    rate_part_id:number | null;
        

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"user_part_id"
        })
    user_part_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user_part_name"
        })
    user_part_name:string | null;
        
}

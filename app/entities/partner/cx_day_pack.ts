import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_day_pack",{schema:"chungxe_partner"})
@Index("day_pack_num_UNIQUE",["day_pack_num",],{unique:true})
@Index("day_pack_name_UNIQUE",["day_pack_name",],{unique:true})
export class cx_day_pack {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"day_pack_id"
        })
    day_pack_id:number;
        

    @Column("int",{ 
        nullable:false,
        unique: true,
        name:"day_pack_num"
        })
    day_pack_num:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:128,
        name:"day_pack_name"
        })
    day_pack_name:string;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_type",{schema:"chungxe_vehicle"})
@Index("vhc_type_code_UNIQUE",["vhc_type_code",],{unique:true})
export class cx_vhc_type {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_type_id"
        })
    vhc_type_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"vhc_type_name"
        })
    vhc_type_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:100,
        name:"vhc_type_code"
        })
    vhc_type_code:string;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_modl",{schema:"chungxe_vehicle"})
@Index("vhc_modl_name_UNIQUE",["vhc_modl_name",],{unique:true})
export class cx_vhc_modl {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_modl_id"
        })
    vhc_modl_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"vhc_modl_name"
        })
    vhc_modl_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_bran_id"
        })
    vhc_bran_id:number;
        
}

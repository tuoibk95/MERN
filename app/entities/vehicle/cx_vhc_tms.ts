import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_tms",{schema:"chungxe_vehicle"})
@Index("vhc_tms_name_UNIQUE",["vhc_tms_name",],{unique:true})
export class cx_vhc_tms {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_tms_id"
        })
    vhc_tms_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"vhc_tms_name"
        })
    vhc_tms_name:string;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_fuel",{schema:"chungxe_vehicle"})
@Index("vhc_fuel_name_UNIQUE",["vhc_fuel_name",],{unique:true})
export class cx_vhc_fuel {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"vhc_fuel_id"
        })
    vhc_fuel_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"vhc_fuel_name"
        })
    vhc_fuel_name:string;
        
}

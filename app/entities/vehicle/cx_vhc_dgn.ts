import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_dgn",{schema:"chungxe_vehicle"})
@Index("vhc_dgn_name_UNIQUE",["vhc_dgn_name",],{unique:true})
export class cx_vhc_dgn {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"vhc_dgn_id"
        })
    vhc_dgn_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"vhc_dgn_name"
        })
    vhc_dgn_name:string;
        
}

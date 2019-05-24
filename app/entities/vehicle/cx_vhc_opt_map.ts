import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_opt_map",{schema:"chungxe_vehicle"})
export class cx_vhc_opt_map {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_opt_map_id"
        })
    vhc_opt_map_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_opt_id"
        })
    vhc_opt_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_id"
        })
    vhc_id:number;
        
}

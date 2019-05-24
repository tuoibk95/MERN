import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_type_opt",{schema:"chungxe_vehicle"})
export class cx_vhc_type_opt {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_type_opt_id"
        })
    vhc_type_opt_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_opt_id"
        })
    vhc_opt_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_type_id"
        })
    vhc_type_id:number;
        
}

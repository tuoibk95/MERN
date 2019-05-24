import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_bran",{schema:"chungxe_vehicle"})
export class cx_vhc_bran {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"vhc_bran_id"
        })
    vhc_bran_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"vhc_bran_name"
        })
    vhc_bran_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_type_id"
        })
    vhc_type_id:number;
        
}

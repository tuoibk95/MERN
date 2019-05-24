import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_opt",{schema:"chungxe_vehicle"})
@Index("vhc_opt_name_UNIQUE",["vhc_opt_name",],{unique:true})
export class cx_vhc_opt {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_opt_id"
        })
    vhc_opt_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"vhc_opt_name"
        })
    vhc_opt_name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"vhc_opt_ico"
        })
    vhc_opt_ico:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_opt_prty"
        })
    vhc_opt_prty:number | null;
        
}

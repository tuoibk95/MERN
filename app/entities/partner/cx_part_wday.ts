import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_part_wday",{schema:"chungxe_partner"})
export class cx_part_wday {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"part_wday_id"
        })
    part_wday_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"part_id"
        })
    part_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"wday_id"
        })
    wday_id:number;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"part_wday_exta_fee"
        })
    part_wday_exta_fee:number | null;
        
}

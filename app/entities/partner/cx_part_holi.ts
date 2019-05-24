import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_part_holi",{schema:"chungxe_partner"})
export class cx_part_holi {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"part_holi_id"
        })
    part_holi_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"part_id"
        })
    part_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"holi_id"
        })
    holi_id:number;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"part_holi_exta_fee"
        })
    part_holi_exta_fee:number | null;
        
}

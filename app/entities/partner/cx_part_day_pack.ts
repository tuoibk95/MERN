import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_part_day_pack",{schema:"chungxe_partner"})
export class cx_part_day_pack {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"part_day_pack_id"
        })
    part_day_pack_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"day_pack_id"
        })
    day_pack_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"part_id"
        })
    part_id:number;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"part_day_pack_disc_fee"
        })
    part_day_pack_disc_fee:number | null;
        
}

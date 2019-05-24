import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_part_proc",{schema:"chungxe_partner"})
export class cx_part_proc {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"part_proc_id"
        })
    part_proc_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"proc_id"
        })
    proc_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"part_id"
        })
    part_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"part_proc_note"
        })
    part_proc_note:string | null;
        
}

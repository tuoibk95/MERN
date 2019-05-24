import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_proc",{schema:"chungxe_partner"})
@Index("proc_name_UNIQUE",["proc_name",],{unique:true})
export class cx_proc {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"proc_id"
        })
    proc_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:255,
        name:"proc_name"
        })
    proc_name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"proc_ico"
        })
    proc_ico:string | null;
        
}

import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_part_pay_meth",{schema:"chungxe_partner"})
export class cx_part_pay_meth {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"part_pay_meth_id"
        })
    part_pay_meth_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"part_id"
        })
    part_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"pay_meth_id"
        })
    pay_meth_id:number;
        
}

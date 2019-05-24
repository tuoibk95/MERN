import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_pay_meth",{schema:"chungxe_partner"})
export class cx_pay_meth {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"pay_meth_id"
        })
    pay_meth_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"pay_meth_name"
        })
    pay_meth_name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"pay_meth_ico"
        })
    pay_meth_ico:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"pay_meth_des"
        })
    pay_meth_des:string | null;
        
}

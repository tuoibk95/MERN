import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_book_prie_detl",{schema:"chungxe_booking"})
export class cx_book_prie_detl {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"book_prie_detl_id"
        })
    book_prie_detl_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"book_id"
        })
    book_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"book_prie_type_id"
        })
    book_prie_type_id:number;
        

    @Column("int",{ 
        nullable:true,
        default:"0",
        name:"prie_type_qaty"
        })
    prie_type_qaty:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"unit_prie"
        })
    unit_prie:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"detl_prie_tota"
        })
    detl_prie_tota:number | null;
        
}

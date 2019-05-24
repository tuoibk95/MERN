import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_book_prie_type",{schema:"chungxe_booking"})
@Index("book_prie_type_code_UNIQUE",["book_prie_type_code",],{unique:true})
export class cx_book_prie_type {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"book_prie_type_id"
        })
    book_prie_type_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:50,
        name:"book_prie_type_code"
        })
    book_prie_type_code:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"book_prie_type_name"
        })
    book_prie_type_name:string | null;
        
}

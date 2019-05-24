import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_book_stt",{schema:"chungxe_booking"})
@Index("book_stt_name_UNIQUE",["book_stt_name",],{unique:true})
export class cx_book_stt {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"book_stt_id"
        })
    book_stt_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:50,
        name:"book_stt_name"
        })
    book_stt_name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"book_stt_ico"
        })
    book_stt_ico:string | null;
        
}

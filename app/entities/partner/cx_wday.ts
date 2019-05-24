import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_wday",{schema:"chungxe_partner"})
@Index("wday_name_UNIQUE",["wday_name",],{unique:true})
export class cx_wday {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"wday_id"
        })
    wday_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:50,
        name:"wday_name"
        })
    wday_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"wday_indx"
        })
    wday_indx:number;
        
}

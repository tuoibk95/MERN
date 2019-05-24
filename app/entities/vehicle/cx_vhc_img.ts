import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_img",{schema:"chungxe_vehicle"})
@Index("name_UNIQUE",["vhc_img_name",],{unique:true})
export class cx_vhc_img {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_img_id"
        })
    vhc_img_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"vhc_img_name"
        })
    vhc_img_name:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"vhc_img_link"
        })
    vhc_img_link:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"vhc_tbl_id"
        })
    vhc_tbl_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"vhc_tbl_name"
        })
    vhc_tbl_name:string | null;
        
}

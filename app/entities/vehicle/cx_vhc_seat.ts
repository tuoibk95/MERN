import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cx_vhc_seat",{schema:"chungxe_vehicle"})
@Index("vhc_seat_num_UNIQUE",["vhc_seat_num",],{unique:true})
export class cx_vhc_seat {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"vhc_seat_id"
        })
    vhc_seat_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"vhc_seat_num"
        })
    vhc_seat_num:number;
        
}

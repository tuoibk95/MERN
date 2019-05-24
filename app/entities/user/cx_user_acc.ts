import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId } from "typeorm";


@Entity("cx_user_acc", { schema: "chungxe_user" })
export class cx_user_acc {

    @Column("varchar", {
        nullable: true,
        length: 255,
        name: "disb_api_ids"
    })
    disb_api_ids: string | null;


    @Column("timestamp", {
        nullable: true,
        name: "user_acc_crta"
    })
    user_acc_crta: Date | null;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "user_acc_emai"
    })
    user_acc_emai: string;


    @Column("int", {
        nullable: false,
        primary: true,
        name: "user_acc_id"
    })
    user_acc_id: number;


    @Column("timestamp", {
        nullable: true,
        name: "user_acc_last_logn"
    })
    user_acc_last_logn: Date | null;


    @Column("varchar", {
        nullable: false,
        length: 255,
        name: "user_acc_name"
    })
    user_acc_name: string;


    @Column("longtext", {
        nullable: false,
        name: "user_acc_pass"
    })
    user_acc_pass: string;


    @Column("varchar", {
        nullable: true,
        length: 255,
        name: "user_acc_phon"
    })
    user_acc_phon: string | null;


    @Column("varchar", {
        nullable: true,
        length: 255,
        name: "user_acc_tokn"
    })
    user_acc_tokn: string | null;


    @Column("timestamp", {
        nullable: true,
        name: "user_acc_upda"
    })
    user_acc_upda: Date | null;


    @Column("int", {
        nullable: true,
        default: "1",
        name: "user_part_id"
    })
    user_part_id: number | null;


    @Column("int", {
        nullable: true,
        default: "1",
        name: "user_role_id"
    })
    user_role_id: number | null;

}
import IUserAccountService from "./IUserAccountService";
import UserAccountRepository from "../../repository/user/UserAccountRepository";
import { cx_user_acc as UserAccount } from "../../entities/user/cx_user_acc";
import * as JWT from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";

export default class UserAccountService  implements IUserAccountService {

    private userRepo:UserAccountRepository;

    constructor(){
        this.userRepo = new UserAccountRepository();
    }

    public async getAll(): Promise<Array<UserAccount>> {
        return await this.userRepo.getAll();
    }

    public async getOne(id: number): Promise<UserAccount> {
        return await this.userRepo.getOne(id);
    }

    public async create(userAccount: UserAccount): Promise<UserAccount> {
        return await this.userRepo.create(userAccount);
    }

    public async delete(id: number): Promise<UserAccount> {
        return await this.userRepo.delete(id);
    }

    public async update(id: number, userAccount: UserAccount): Promise<UserAccount> {
        return await this.userRepo.update(id, userAccount);       
    }

    public async findByUsername(username: string): Promise<UserAccount> {
        return await this.userRepo.findByUserName(username);
    }

    public async findByEmail(email: string): Promise<UserAccount> {
        return await this.userRepo.findByEmail(email);
    }

    public async findByPhone(phone: any): Promise<UserAccount> {
        return await this.userRepo.findByPhone(phone);
    }

    public async isPhoneNumber(phone: any): Promise<UserAccount> {
        return await this.userRepo.isPhoneNumber(phone);
    }

    public async isEmailAddress(email: string): Promise<UserAccount> {
        return await this.userRepo.isEmailAddress(email);
    }
}
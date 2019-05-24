import { cx_user_acc as UserAccount } from "../../entities/user/cx_user_acc";

export default interface IUserAccountService {
    getAll(): Promise<Array<UserAccount>>
    getOne(id: number): Promise<UserAccount>
    create(userAccount: UserAccount):Promise<UserAccount>
    delete(id: number): Promise<UserAccount>
    update(id: number, userAccount: UserAccount): Promise<UserAccount>
    // findEmail(email: string): Promise<UserAccount> 
    findByEmail(email: string): Promise<UserAccount>
    findByPhone(phone: any): Promise<UserAccount>
    findByUsername(username: string) : Promise<UserAccount>
    isPhoneNumber(phone: number): Promise<UserAccount>
    isEmailAddress(email : string): Promise<UserAccount>
}



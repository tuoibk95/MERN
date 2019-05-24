import { cx_user_acc as UserAccount } from "../../entities/user/cx_user_acc";
import { Repository, getConnectionManager} from 'typeorm';

export default class UserAccountRepository  {

    private userRepo: Repository<UserAccount>;
    
    constructor() {
        this.userRepo = getConnectionManager().get("chungxe_user").getRepository(UserAccount);
    
    }

    public async getAll(): Promise<Array<UserAccount>> {
        return await this.userRepo.find();
    }

    public async getOne(id: number): Promise<UserAccount> {
        return await this.userRepo.findOne(id);
    }

    public async create(userAccount: UserAccount): Promise<UserAccount> {
        return await this.userRepo.save(userAccount);
    }

    public async delete(id: number): Promise<UserAccount> {
        let user = await this.getOne(id);
        await this.userRepo.delete(id);
        return user;

    }
    public async update(id: number, userAccount: UserAccount): Promise<UserAccount> {
        await this.userRepo.update(id, userAccount);
        return this.getOne(id);
    }

    public async findByUserName(username: string): Promise<UserAccount> {
        let user = await this.userRepo.findOne({ "user_acc_name": username })
        return user;
    }

    public async findByEmail(email: string): Promise<UserAccount> {
        let user = await this.userRepo.findOne({ "user_acc_emai": email})
        return user;
    }

    public async findByPhone(phone: any): Promise<UserAccount> {
        let user = await this.userRepo.findOne({ "user_acc_phon": phone})
        return user;
    }

    public async isPhoneNumber(phone: string): Promise<UserAccount> {
        let user = await this.userRepo.findOne({ "user_acc_phon": phone})
        return user;
    }

    public async isEmailAddress(email: string): Promise<UserAccount> {
        let user = await this.userRepo.findOne({ "user_acc_emai": email})
        return user;
    }
}
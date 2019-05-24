import { createConnection, Connection } from "typeorm";
import { cx_user_acc as UserAccount, cx_user_acc } from "../../entities/user/cx_user_acc";
import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import IUserAccountService from "../../service/user/IUserAccountService";
import UserAccountServiceImpl from "../../service/user/UserAccountServiceImpl";
import { Utils } from "../../utils/Validate";
import { MyUtil } from "../../utils/MyUtil";

export default class UserAccountController {
    private userAccountService: IUserAccountService;

    constructor() {
        this.userAccountService = new UserAccountServiceImpl()
    }

    public getAll = async (req: Request, res: Response) => {
        console.log("Received getAllUserAccounts ==> GET");

        this.userAccountService.getAll().then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
    };

    public getUser = async (req: Request, res: Response) => {
        console.log("get user account by username")
        console.log(req.query)
        let username = req.query.username;

        this.userAccountService.findByUsername(username).then((result: any) => {
            console.log("Result: " + result);
        }).catch(() => res.send({ code: "error", message: "error" }));
    }

    public index = async (req: Request, res: Response) => {
        res.render('account/index');
    }

    public getLogin = async (req: Request, res: Response) => {
        res.render('account/login');
    }

    public postLogin = async (req: Request, res: Response, next: NextFunction) => {
        console.log("login user by username and password")
        let params = {
            user_acc_name: req.body.user_acc_name,
            user_acc_pass: req.body.user_acc_pass
        }
        console.log(req.body)
        let check = 0;

        if (Utils.isEmailAddress(params.user_acc_name)) {
            check = 1;
        } else if (Utils.isPhoneNumber(params.user_acc_name)) {
            check = 2;
        }

        console.log(params);
        if (check != 0) {
            let user = await this.userAccountService.findByUsername(params.user_acc_name).catch(err => console.log("error"));
            if (!user) {
                if (check == 1) {
                    let user1 = await this.userAccountService.findByEmail(params.user_acc_name).catch(err => console.log("error"));
                    user = user1;
                } else if (check == 2) {
                    let user2 = await this.userAccountService.findByPhone(params.user_acc_name).catch(err => console.log("error"));
                    user = user2;
                }
            }
            console.log(user)

            if (user) {
                const check = bcrypt.compareSync(req.body.user_acc_pass, user.user_acc_pass)
                if (!check)
                    res.send({ code: "error", message: "password is not true!" });
                else {
                    res.send({ code: "success", data: user });
                    console.log("suscess")
                }
            } else
                res.send({ code: "error", message: "username and password is required!" });
        }
    }

    public getLogout = async (req: Request, res: Response) => {
        req.logout();
        res.redirect('/');
    }

    public getSignup = async (req: Request, res: Response) => {
        res.render('account/signup');
    }

    public postSignup = async (req: Request, res: Response) => {
        console.log("Received SaveUserAccount ==> POST");
        console.log(req.body);
        let user: UserAccount = new UserAccount();
        user = req.body;

        if (!(Utils.isEmailAddress(req.body.user_acc_emai))) {
            return res.status(400).json({
                errCode: -1,
                msg: 'Invalid email format'
            })
        }

        if (!(Utils.isPhoneNumber(req.body.user_acc_phon))) {
            return res.status(400).json({
                errCode: -1,
                msg: "Phone Invalid"
            })
        }

        if (!(Utils.checkUsername(req.body.user_acc_name))) {
            return res.status(400).json({
                errCode: -1,
                msg: "Username Invaild"
            });
        }

        if (Utils.checkPassword(req.body.user_acc_pass)) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.user_acc_pass, salt)

            const res = bcrypt.compareSync(req.body.user_acc_pass, hash)

            console.log(res);
            user.user_acc_pass = hash;
        }

        console.log("3:" + "done")
        let result = await this.userAccountService.create(user).catch((err) => { MyUtil.handleError(err, res); console.log(err) });
        console.log("Result : " + result);
        res.send(result);
        // res.redirect(req.session.returnTo || "/");
    };

    public getAccount = async (req: Request, res: Response) => {
        res.render("account/profile");
    }
}

import { Timestamp } from "bson";
const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');
export const Utils = {
    checkLogin(params) {
        if (!params) return false;
        if (!(params.user_acc_emai && params.user_acc_pass)) return false
        return true
    },
    checkKeysNotExists(obj: object, keys: string[]) {
        if (Array.isArray(keys)) {
            for (let i = 0; i < keys.length; i++) {
                if (!(keys[i] in obj)) {
                    return i;
                }
            }
        } else if (!(keys in obj)) {
            return 0;
        }
        return -1;
    },
    checkEmail(user_acc_emai: string) {
        const reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return reg.test(user_acc_emai);
    },
    checkUsername(user_acc_name: string) {
        const reg = /\w{6,15}/;
        return reg.test(user_acc_name);
    },

    checkPhone(user_acc_phon: string) {
        const reg = /^\d{8,15}$/;
        return reg.test(user_acc_phon);
    },
    checkPassword(user_acc_pass: string) {
        if (user_acc_pass.length > 3) {
            return true;
        }
        return false;
    },

    // rawData(user_acc_crta: any) {
    //     if (!user_acc_crta) return false;
    //         user_acc_crta = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    //     return user_acc_crta;
    // },

    isPhoneNumber: (user_acc_phon) => {
        if (!user_acc_phon) return false;
        user_acc_phon = user_acc_phon.trim();
        var flag = false;

        const gpcPattern = /^(84|0)(9(1|4)|12(3|4|5|7|9)|88)\d{7}$/;

        const vmsPattern = /^(84|0)(9(0|3)|12(0|1|2|6|8)|89)\d{7}$/;

        const viettelPattern = /^(84|0)(9(6|7|8)|16(8|9|6|7|3|4|5|2)|86)\d{7}$/;

        const sfone = /^(84|0)(95|155)\d{7}$/;

        const vnm = /^(84|0)(92|188|186)\d{7}$/;

        const beeline = /^(84|0)((1|)99)\d{7}$/;

        flag = user_acc_phon.match(gpcPattern) || user_acc_phon.match(vmsPattern) || user_acc_phon.match(viettelPattern) || user_acc_phon.match(sfone)
            || user_acc_phon.match(vnm) || user_acc_phon.match(beeline);

        return flag;
    },
    isEmailAddress: (user_acc_emai) => user_acc_emai && user_acc_emai.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]{2,})+$/i),
}

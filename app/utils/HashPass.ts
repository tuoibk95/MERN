import * as bcrypt from 'bcrypt'

export default class HashPass {
    private saltRounds = 10;
    hashPass = (pass) => {
        let passHash = "";
        bcrypt.hash(pass, this.saltRounds).then(hash => {
            console.log("1: " + hash);
            passHash = hash;
        })
        return passHash;
    }
}
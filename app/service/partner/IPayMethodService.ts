import {cx_pay_meth as PayMethod} from "../../entities/partner/cx_pay_meth";

export default interface IPayMethodService {
    getAll(): Promise<PayMethod[]>;
    getOne(id: number): Promise<PayMethod>;
    getPayMethodByName(name: string): Promise<PayMethod>;
    create(payMethod: PayMethod): Promise<PayMethod>;
}
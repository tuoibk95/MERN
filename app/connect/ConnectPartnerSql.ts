import { createConnection, Connection} from 'typeorm';
import * as mysqlConfig from "../config/mysql";
import ConnectBase from './AbConnectBase';
import { DB_PARTNER_NAME } from '../utils/constant';

export default  class ConnectPartnerSql extends ConnectBase{
    constructor(){
        super();
    }

    async connect(): Promise<Connection> {
        return await createConnection(DB_PARTNER_NAME);
    }

}
import { createConnections, Connection } from 'typeorm';
import * as mysqlConfig from "../config/mysql";
import ConnectBase from './AbConnectBase';

export default class ConnectVehicleSql extends ConnectBase {
    constructor() {
        super();
        
    }

    async connect(): Promise<Connection[]> {
        return await createConnections([
            {
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "LVTsinhvienit1",
                database: "chungxe_vehicle",
                name:"chungxe_vehicle",
                synchronize: true,
                logging: false,
                entities: [
                    "app/entities/vehicle/*.ts"
                ],
                migrations: [
                    "app/migration/**/*.ts"
                ],
                subscribers: [
                    "app/subscriber/**/*.ts"
                ],
                cli: {
                    "entitiesDir": "app/entities",
                    "migrationsDir": "app/migration",
                    "subscribersDir": "app/subscriber"
                }
            }, {
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "LVTsinhvienit1",
                database: "chungxe_user",
                name:"chungxe_user",
                synchronize: true,
                logging: false,
                entities: [
                    "app/entities/user/*.ts"
                ],
                migrations: [
                    "app/migration/**/*.ts"
                ],
                subscribers: [
                    "app/subscriber/**/*.ts"
                ],
                cli: {
                    "entitiesDir": "app/entities",
                    "migrationsDir": "app/migration",
                    "subscribersDir": "app/subscriber"
                }
            }
        ])
    }

}
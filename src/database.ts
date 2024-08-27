import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { Config } from './config/config';

interface Database {
    user: {
        user_id?: number;
        user_name: string;
        user_email: string;
    };
    password: {
        password_key: number;
        user_id: number;
        password_hash: string;
    };
    product: {
        user_id: number;
        category_id: number;
        product_id?: number;
        product_name: string;
        product_price: number;
        product_brand: string;
    };
    category: {
        category_id?: number;
        category_name: string;
    };
}

const db = new Kysely<Database>({
    dialect: new PostgresDialect({
        pool: new Pool({
            user: Config.USERDB,
            host: Config.HOSTDB,
            database: Config.DATABASE,
            password: Config.PASSWORD,
            port: Config.DB_PORT,
        }),
    }),
});
export default db;
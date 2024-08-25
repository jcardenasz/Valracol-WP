import {Client} from "pg";
import {Config} from "./config/config";

const client = new Client({
    user: Config.USERDB,
    host: Config.HOSTDB,
    database: Config.DATABASE,
    password: Config.PASSWORD,
    port: Config.DB_PORT,
});
    client.connect()
        .then(() => console.log('Connected to PostgreSQL database: '+Config.DATABASE))
        .catch(err => console.error('Connection error!', err.stack));

export default client;

import dotenv from 'dotenv';
dotenv.config();

export class Config {
    private static _PORT: number = parseInt(process.env.PORT || "3000",10);
    private static _USERDB: string = process.env.DB_USER || '';
    private static _HOSTDB: string = "http://localhost:"+Config._PORT|| '';
    private static _DATABASE: string = process.env.DB_DATABASE || '';
    private static _PASSWORD: string = process.env.DB_PASSWORD || '';


    static get PORT(): number {
        return this._PORT;
    }

    static get DATABASE(): string {
        return this._DATABASE;
    }

    static get USERDB(): string {
        return this._USERDB;
    }

    static get HOSTDB(): string {
        return this._HOSTDB;
    }

    static get PASSWORD(): string {
        return this._PASSWORD;
    }
}


import express, {Application} from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import passwRoutes from "./routes/passw.routes";

import cookieParser from "cookie-parser";


export class App {
    private readonly app: Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(cookieParser());
        this.app.use(cors({
            origin: true,
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
            allowedHeaders: ["Content-Type", "Authorization"],

        }));
        this.app.use(express.json());
    }

    private routes() {
        const start = "/api";
        this.app.use(start + "/auth", authRoutes);
        this.app.use(start + "/user", userRoutes);
        this.app.use(start + "/passw", passwRoutes);
    }

    public getServer() {
        return this.app;
    }

}
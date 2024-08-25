import express, {Application} from "express";
import cors from "cors";
import categoryRoutes from "./routes/category.routes";

export class App {
    private readonly app: Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
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
        this.app.use(start + "/category", categoryRoutes);
    }

    public getServer() {
        return this.app;
    }

}
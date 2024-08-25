import { Config } from "./config/config";
import { App } from "./app";

const app = new App();
const port = Config.PORT;

app.getServer().listen(port, () => {
    console.log(`Server is running on port ${port} to Valracol!`);
});
import express from "express";
import cors from "cors";
import UserRouters from "./routers/UserRouters";
import AuthRouter from "./routers/AuthRouter";
import Register from "./routers/RegisterRouter";
import Authentic from "./middlewares/Authentic";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", Authentic, (req: express.Request, res: express.Response) => res.status(200).json({ Server: "OK" }));
app.use("/users", UserRouters);
app.use("/auth", AuthRouter);
app.use("/register", Register);

export { app };

import express from "express";
import cors from "cors";
import UserRouters from "./routers/UserRouters";
import Auth from "./routers/AuthRouter";
import Register from "./routers/RegisterRouter";
import RafflesRouters from "./routers/RafflesRouters"
import NumbersRouters from "./routers/NumbersRouters"
import Authentic from "./middlewares/Authentic";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => res.status(200).json({ Server: "OK" }));

app.use("/auth", Auth);
app.use("/register", Register);

app.use("/users", Authentic, UserRouters);
app.use("/raffles", Authentic, RafflesRouters);
app.use("/numbers", Authentic, NumbersRouters);

export { app };

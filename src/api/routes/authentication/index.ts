import { Router } from "express";
import signup from "./signup";

const route = Router();

export default(app: Router) => {
    app.use('/auth', route);

    signup(route);
}
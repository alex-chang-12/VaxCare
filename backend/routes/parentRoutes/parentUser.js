import express from "express";
import { parentRegisterUser, parentUserLogin } from "../../controllers/parentController/parentUserController.js";

const parentUserRouter = express.Router();

parentUserRouter.post('/parent-login', parentUserLogin)
parentUserRouter.post('/parent-register', parentRegisterUser)


export default parentUserRouter;
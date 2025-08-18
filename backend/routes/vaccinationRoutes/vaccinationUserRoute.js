import express from "express";

import { vaccinationLoginUser, vaccinationRegisterUser } from "../../controllers/vaccinationCenterControllers/vaccinationUserController.js";
const vaccinationUserRouter = express.Router();

vaccinationUserRouter.post("/vaccine-user-register", vaccinationRegisterUser )
vaccinationUserRouter.post("/vaccine-user-login", vaccinationLoginUser);

export default vaccinationUserRouter;
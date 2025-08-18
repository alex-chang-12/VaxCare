import express from "express";
import { getVaccinationCenterInfo, getVaccinationCenterInfoByAdmin, updateVaccinationCenterInfoByAdmin, vaccinationCenterInfo } from "../../controllers/vaccinationCenterControllers/vaccinationCenterController.js";
import {jwtAuth} from "../../middleware/auth.js"
import { createVaccine, getAllVaccines } from "../../controllers/vaccinationCenterControllers/vaccineController.js";

const vaccinationCenterRouter = express.Router();

vaccinationCenterRouter.post("/create", jwtAuth,vaccinationCenterInfo);
vaccinationCenterRouter.post("/add-vaccine", jwtAuth, createVaccine);
vaccinationCenterRouter.get("/get-vaccine", jwtAuth,getAllVaccines);
vaccinationCenterRouter.get("/get-vaccination-center", getVaccinationCenterInfo);
vaccinationCenterRouter.put("/update-vaccine-center/:vaccineCenterId",jwtAuth,updateVaccinationCenterInfoByAdmin);



vaccinationCenterRouter.get("/get-vaccine-center",jwtAuth, getVaccinationCenterInfoByAdmin)


export default vaccinationCenterRouter;


// // vaccinationCenterRouter.js
// import express from "express";
// import { getVaccinationCenterInfo, getVaccinationCenterInfoByAdmin, updateVaccinationCenterInfoByAdmin, vaccinationCenterInfo } from "../../controllers/vaccinationCenterControllers/vaccinationCenterController.js";
// import { jwtAuth } from "../../middleware/auth.js";
// import { createVaccine, getAllVaccines } from "../../controllers/vaccinationCenterControllers/vaccineController.js";

// const vaccinationCenterRouter = express.Router();

// vaccinationCenterRouter.post("/create", jwtAuth, vaccinationCenterInfo);
// vaccinationCenterRouter.post("/add-vaccine", jwtAuth, createVaccine);
// vaccinationCenterRouter.get("/get-vaccine", jwtAuth, getAllVaccines);
// vaccinationCenterRouter.get("/get-vaccination-center", getVaccinationCenterInfo);
// vaccinationCenterRouter.put("/update-vaccine-center/:vaccineCenterId", jwtAuth, updateVaccinationCenterInfoByAdmin);
// vaccinationCenterRouter.get("/get-vaccine-center", jwtAuth, getVaccinationCenterInfoByAdmin);

// export default vaccinationCenterRouter;
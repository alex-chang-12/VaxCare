import express from "express";
import { jwtAuth } from "../../middleware/auth.js";
import { createChildProfile, createDoctor, displayDoctorList, getParentChildrenProfiles, updateChildProfile } from "../../controllers/parentController/childParentController.js";

const parentCreateRouter = express.Router();

parentCreateRouter.post('/child-create', jwtAuth, createChildProfile);

parentCreateRouter.get('/children', jwtAuth, getParentChildrenProfiles);

parentCreateRouter.post('/doctor-create', createDoctor);

parentCreateRouter.get('/doctor', displayDoctorList);

parentCreateRouter.put("/update/:childProfileId", jwtAuth, updateChildProfile);
export default parentCreateRouter;

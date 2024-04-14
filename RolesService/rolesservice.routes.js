import { Router } from "express";
import { rolesRetrieval, rolesCreation } from "./rolesservice.controllers.js";
const rolesRouter=Router()

rolesRouter.post('/create',rolesCreation)
rolesRouter.get('/get/:name',rolesRetrieval)


export default rolesRouter
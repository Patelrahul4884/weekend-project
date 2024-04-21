import express from "express"
// import { authVerify, validateBody, verifyPermission } from "../authUtils.js";
// import { userCreationSchema, userSignInSchema } from "./userservice.schema.js";
import { createUser, signInUser } from "./userservice.controller.js";
const userRouter = express.Router();

// userRouter.post("/create", validateBody(userCreationSchema), authVerify, (req, res, next) => verifyPermission(req, res, next, "create", "user"), createUser)
// userRouter.post("/sign-in", validateBody(userSignInSchema), signInUser)

userRouter.post("/create", createUser)
userRouter.post("/sign-in", signInUser)


export default userRouter;
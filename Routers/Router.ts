import  express, {IRouter, NextFunction} from "express";
import dataController from "../src/Controllers/StoreController"
import stroeController from "../src/Controllers/StoreController"
import authController from "../src/Controllers/AuthController"
import { verifyAdmin, verifyUser } from "../Helpers/JWT";

const router:IRouter = express.Router()
router.use("/auth",authController) 
router.use("/missile",stroeController)

export default router

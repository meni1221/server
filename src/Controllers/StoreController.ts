import express, { IRouter, Request, Response } from "express";
import {
  allMissils
} from "../Services/StoreServic";

const router: IRouter = express.Router();
router.get("/all", async (req: Request, res: Response): Promise<void> => {
  try {
    const getAll = await allMissils();

    res.json(getAll);
  } catch (error: any) {
    console.error(error.message);
  }
});




export default router;

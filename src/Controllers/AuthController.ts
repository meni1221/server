import express, { IRouter, Request, Response } from "express";
import { login, logout, register } from "../Services/AuthServic";

const router: IRouter = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const userAuth = await login(user, res);
    res.json(userAuth);
  } catch (error: any) {
    console.error(error.message);
  }
});

router.post("/register", (req: Request, res: Response): void => {
  try {
    const user = req.body;
    register(user);
    res.status(200).json({ message: "You have successfully registered" });
  } catch (error: any) {
    console.error(error.message);
  }
});

router.post("/logout", (req: Request, res: Response): void => {
  try {
    logout(res);
    res.status(200).json({ message: "logged out successfully" });
  } catch (error: any) {
    console.error(error.message);
  }
});

export default router;

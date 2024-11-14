import express, { Express } from "express";
import "dotenv/config";
import router from "./Routers/Router";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import loadInitialData from "./Initializedata/readingData";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

loadInitialData();
app.use(express.json());
app.use(cookieParser());
app.use(router);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("connect to db"))
  .catch((error) => console.error("error to conect", error));

app.listen(process.env.PORT || 8000, () => {
  console.log(` listen to port http://localhost:${process.env.PORT || 8000} `);
});

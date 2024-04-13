import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

dotenv.config({path:"../.env"})
export const app = express();
app.use(bodyParser.json());
app.disable("x-powered-by");
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser())
console.log(JSON.parse(process.env.ORIGIN));
const corsOptions = {
  origin: JSON.parse(process.env.ORIGIN),
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(
  cors({
    ...corsOptions,
    exposedHeaders: ["x_accesstoken", "x_refreshtoken"],
  })
);
const PORT = process.env.USER_SERVICE_PORT || 3001;

const db = process.env.USER_SERVICE_MONGO_URL;
mongoose
  .connect(db)
  .then(() => {

    app.listen(PORT, () => {
      console.log(`User Service running on port: ${PORT} 🚀`);
    });
  })
  .catch((error) => console.log(error.message));


app.use("*", (req, res) => {
  res.status(404).json({
    success: 0,
    message: "We didn't find what you are looking for!",
    data: null,
  });
});

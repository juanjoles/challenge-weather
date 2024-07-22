import express from "express";
import {
  dataCityController,
  whaterCity,
  longWeather,
} from "../controllers/controllers.js";

const Router = express.Router();

Router.use("/location", dataCityController);
Router.use("/current", whaterCity);
Router.use("/forecast", longWeather);

export { Router };

import "dotenv/config";
import axios from "axios";
import { Router } from "express";
const dataCityController = Router();
const whaterCity = Router();
const longWeather = Router();

const getDataCity = async () => {
  try {
    const response = await axios.get(`http://ip-api.com/json/`);
    console.log("getDataCity", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `error city ${error}` });
  }
};

dataCityController.get("/", async (req, res) => {
  try {
    const response = await getDataCity();
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error." });
  }
});

whaterCity.get("/:city?", async (req, res) => {
  try {
    let city = req.params.city;
    if (!req.params.city) {
      const location = await getDataCity();
      city = location.regionName;
    }
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: process.env.OPEN_WEATHER_MAP_API_KEY,
          units: "metric",
        },
      }
    );
    res.status(200).json({ message: weatherResponse.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error." });
  }
});

longWeather.get("/:city?", async (req, res) => {
  try {
    let city = req.params.city;
    if (!req.params.city) {
      const location = await getDataCity();
      city = location.regionName;
    }
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          appid: process.env.OPEN_WEATHER_MAP_API_KEY,
          units: "metric",
        },
      }
    );
    res.status(200).json({ message: forecastResponse.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error." });
  }
});

export { dataCityController, whaterCity, longWeather };

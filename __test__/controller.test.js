import request from "supertest";
import express from "express";
import axios from "axios";
import {
  dataCityController,
  whaterCity,
  longWeather,
} from "../controllers/controllers";

jest.mock("axios");

const app = express();

app.use("/", dataCityController);
app.use("/:city?", whaterCity);
app.use("/:city?", longWeather);

describe("GET /", () => {
  it("Get data city correct.", async () => {
    const dataMock = { city: "Madrid", country: "España" };
    axios.get.mockResolvedValue({ data: dataMock });
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toEqual(dataMock);
  });

  it("Get data city error.", async () => {
    axios.get.mockRejectedValue(new Error("getDataCity error"));
    const res = await request(app).get("/");
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Server Error.");
  });
});

describe("GET /:city?", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("response weather for a specific city.", async () => {
    const mockData = {
      weather: [{ main: "Windy", description: "Windy in the morning." }],
      main: { temp: 25 },
      name: "Madrid",
    };

    axios.get.mockResolvedValue({ data: mockData });

    const res = await request(app).get("/Madrid");
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual(mockData);
  });

  it("Server Error.", async () => {
    axios.get.mockRejectedValue(new Error("API Error"));
    const res = await request(app).get("/");
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Server Error.");
  });
});

describe("GET /:city?", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("response with forecast data for a specific city", async () => {
    const mockData = {
      list: [
        {
          dt: 1626777600,
          main: { temp: 25 },
          weather: [{ main: "Windy", description: "Windy in the night." }],
        },
        {
          dt: 1626864000,
          main: { temp: 26 },
          weather: [{ main: "Fog", description: "Fog in the morning." }],
        },
      ],
      city: { name: "Madrid", country: "ES" },
    };

    axios.get.mockResolvedValue({ data: mockData });

    const res = await request(app).get("/Madrid");
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual(mockData);
  });
});

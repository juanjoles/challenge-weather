import express from "express";
import { Router } from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", Router);
const port = 3000;

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});

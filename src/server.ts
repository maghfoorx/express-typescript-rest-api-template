import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import filePath from "./filePath";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT_NUMBER = process.env.PORT ?? 4000;

app.get("/", (req, res) => {
  const pathToFile = filePath("../public/index.html");
  res.sendFile(pathToFile);
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server is listneing on port ${PORT_NUMBER}!`);
});

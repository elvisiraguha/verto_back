import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const { Sequelize } = require("@sequelize/core");
import { config } from "dotenv";
import { createClient } from "redis";
import router from "./routes/index";

config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
const redisClient = createClient({
  url: process.env.REDIS_URL,
});

initDb();

async function initDb() {
  try {
    await sequelize.authenticate();
    await redisClient.connect();

    app.use("/api/v1", router);
    app.use("/*", (req, res) =>
      res.status(405).json({ status: 405, message: "Method not allowed" })
    );

    app.listen(port, () =>
      console.log("successfully started....\n on port ", port)
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export { sequelize, redisClient };

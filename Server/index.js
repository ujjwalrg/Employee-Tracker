import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import getRoutes from "./Routes/routes.js";
import bodyParser from "body-parser";
import "dotenv/config";

console.log(process.env);
const server = express();
const PORT = process.env.PORT || 3001;

// only look at the request with content type json
server.use(bodyParser.json({ limit: "50mb" }));
//accept only utf-8 encoding on the body
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors());
server.use("/", getRoutes);
const connection = async () => await mongoose.connect(process.env.Mongo_URL);

connection()
  .then(
    server.listen(PORT, () =>
      console.log(`Life-Recap server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));

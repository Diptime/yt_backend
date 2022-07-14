import dotenv from "dotenv";  //require dotenv package
dotenv.config({ path: "./config.env" }); //import config.env file

import express from "express";
//const express = require("express");
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
// const blogRouter = require("./routes/blog-routes");
// const router = require("./routes/user-routes");
// const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
const DB = process.env.MONGO;
const port = process.env.PORT || 5000;
mongoose
  .connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology : true
  })
  .then(() => app.listen(port))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(cors());
env.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("DB connected");
});

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started at port 5000");
});

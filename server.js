const express = require("express");
const userRoutes = require("./routes/user");
const thoughtRoutes = require("./routes/thought");
const app = express();
const mongoose = require("mongoose");

app.use("/api/thoughts", thoughtRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(
    "mongodb+srv://joshuaA:abcd1234@cluster0.bnsumjl.mongodb.net/Social-Network-API?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001);
  });

const express = require("express");
const userRoutes = require("./routes/user");
const thoughtRoutes = require("./routes/thought");
const app = express();

app.use("/api/thoughts", thoughtRoutes);
app.use("/api/users", userRoutes);

app.listen(3001);

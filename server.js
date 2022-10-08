const express = require("express");
const userRoutes = require("./routes/user");
const app = express();

app.use("/api/users", userRoutes);

app.listen(3001);

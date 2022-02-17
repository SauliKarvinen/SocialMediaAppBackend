const express = require("express");
const app = express();
require("dotenv").config();
const home = require("./Routes/home");
const login = require("./Routes/login");
const signup = require("./Routes/signup");

const PORT = process.env.PORT || 3000;

app.use("/", home);
app.use("/login", login);
app.use("/signup", signup);

//console.log("MODE:", process.env.ENV_MODE);

if (process.env.ENV_MODE === "development") {
  console.log("DEV!");
  app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
  });
} else {
  console.log("TEST!");
  module.exports = app;
}

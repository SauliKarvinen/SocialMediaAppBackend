const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const home = require("./Routes/home");
const login = require("./Routes/login");
const signup = require("./Routes/signup");
const dbconfig = require("./Database/dbconfig");

const PORT = process.env.PORT || 3000;

dbconfig();

app.use("/", home);
app.use("/login", login);
app.use("/signup", signup);

if (process.env.ENV_MODE === "development") {
  console.log("DEV!");
  app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
  });
} else {
  console.log("TEST!");
  module.exports = app;
}

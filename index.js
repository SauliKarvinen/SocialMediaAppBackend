const express = require("express");
const app = express();
require("dotenv").config();
const home = require("./Routes/home");

const PORT = process.env.PORT || 3000;

app.use("/", home);

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

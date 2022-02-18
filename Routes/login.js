const express = require("express");
const router = express.Router();
const User = require("../Database/Schemas/User");
const hashpw = require("../Authentication/passwordhash");

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/", async (req, res) => {});
module.exports = router;

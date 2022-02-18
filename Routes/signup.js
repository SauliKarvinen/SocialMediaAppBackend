const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/", (req, res) => {
  jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: 15000,
  });
});

module.exports = router;

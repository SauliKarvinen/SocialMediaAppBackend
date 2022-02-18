const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(0);
});

router.post("/", async (req, res) => {
  res.sendStatus(0);
});
module.exports = router;

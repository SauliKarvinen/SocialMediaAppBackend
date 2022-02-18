const jwt = require("jsonwebtoken");
const { create } = require("../Database/Schemas/User");
require("dotenv").config();

const createToken = (userdata) => {
  return jwt.sign(userdata, process.env.SECRET_TOKEN, { expiresIn: 15000 });
};

const auth = (req, res, next) => {};

module.exports = { createToken: createToken, auth: auth };

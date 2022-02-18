const bcrypt = require("bcrypt");

const hashpw = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedpw = await bcrypt.hash(password, salt);
  return hashedpw;
};

const comparePasswords = (stringpw, hahspw) => {
  const result = bcrypt.compare(stringpw, hashpw);

  console.log("result:", result);
};

module.exports = { hashpw: hashpw, comparePasswords: comparePasswords };

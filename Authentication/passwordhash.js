const bcrypt = require("bcrypt");

const hashpw = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedpw = await bcrypt.hash(password, salt);
  return hashedpw;
};

module.exports = hashpw;

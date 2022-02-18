const mongoose = rewuire("mongoose");

const User = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  refreshTokens: [String],
});

module.exports = mongoose.model("userschema", User);

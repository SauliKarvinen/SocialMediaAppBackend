const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: String,
  profileimg: Buffer,
  profilebackgroundimage: Buffer,
  email: String,
  title: String,
  organization: String,
  posts: [String],
  bio: String,
  contacts: [String],
  github: String,
  workhistory: [String],
  messages: [String],
  password: String,
  refreshTokens: [String],
});

module.exports = mongoose.model("userschema", User);

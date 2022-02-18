const mongoose = rewuire("mongoose");

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

/* 
this.name = name;
    this.profileimg = profileimg;
    this.profilebackgroundimage = profilebackgroundimage;
    this.email = email;
    this.title = title;
    this.organization = organization;
    this.posts = [];
    this.bio = "";
    this.contacts = [];
    this.github = "";
    this.workhistory = [];
    this.messages = [];
*/

module.exports = mongoose.model("userschema", User);

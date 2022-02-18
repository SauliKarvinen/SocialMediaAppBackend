const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.log("Database connection failed");
  }
};

module.exports = dbConnection;

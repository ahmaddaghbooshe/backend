const mongoose = require("mongoose");

const connect = async () => {
  const dbUrl = process.env.DB_URL;

  try {
    mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connect;

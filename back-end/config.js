const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewURLParser: true,
    useNewURLParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connection.once("open", () => {
    console.log("Connected to mongodb");
  });
}

require("dotenv").config();
const { config } = require("dotenv");

module.exports = main;

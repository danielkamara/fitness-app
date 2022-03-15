// NPM Packages
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// Local Requirements
const mongoConnection = require("./config");
const userRouter = require("./routes/userRoute");

// Configure the app
dotenv.config();

const app = express();

// MAKE THE PORT
const port = process.env.PORT || 3000;

// Security
app.use(helmet());

// MIDDLE WARES!!!
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use("/user", userRouter);
// app.use("/register", userRouter);

// Base Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Base Route is up" });
});

// Listen
app.listen(port, () => {
  mongoConnection();
  console.log(`Server is listening at ${port}`);
});

// NPM Packages

const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Local Requirements
const mongoConnection = require("./config");
const userRouter = require("./routes/userRoute");

// Configure the app
dotenv.config();

const app = express();

// MAKE THE PORT
const PORT = process.env.PORT || 5500;

// Security
app.use(helmet());

// MIDDLE WARES!!!
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Base Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Base Route is up" });
});

// Routes
app.use("/user", userRouter);
app.use("/register", userRouter);

// Listen
app.listen(PORT, () => {
  mongoConnection();
  console.log(`Server is listening at ${PORT}`);
});

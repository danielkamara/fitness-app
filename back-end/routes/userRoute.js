const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../schema/userSchema");
const jwt = require("../middleware/jwt");

const userRouter = express.Router();

userRouter.get("/", jwt.verifyJWT, (req, res) => {
  User.find((error, result) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    if (result === null || result === undefined || result === []) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ data: result });
  });
});

userRouter.post("/register", async (req, res) => {
  let user = req.body;
  let password = user.password;
  let username = user.username;
  let email = user.email;
  let salt = Number(process.env.SALT);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (!password || !user.username || !user.email) {
    return res
      .status(400)
      .json({ message: "Please have a username AND password" });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Please have a valid email" });
  }

  const userEmail = await User.findOne({ email });
  if (userEmail)
    return res.status(400).json({ message: "This email already exist." });

  if (password.length < 5)
    return res
      .status(400)
      .json({ message: "Password must be at least 5 characters long. " });

  let hashPassword = await bcrypt.hash(password, salt);
  user.password = hashPassword;

  User.create(user, (error, result) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    if (result === undefined || result === null) {
      res.status(400).json({ message: "Please make a unique user" });
    }

    let token = jwt.generateAccessToken(username, process.env.JWT_SECRET);
    res.setHeader("Authorization", token);
    res.status(200).json({ data: result, token: token });
  });
});

userRouter.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (!password || !username) {
    res.status(400).json({ message: "Please have a username AND password" });
    console.log(username);
  }
  User.findOne({ username: username }, (error, result) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    if (result === null || result === undefined) {
      res.status(404).json({ message: "User Not Found" });
    }

    bcrypt.compare(password, result.password, (error, matching) => {
      if (error) {
        res.status(403).json({ message: error.message });
      } else if (matching === false) {
        res
          .status(403)
          .json({ message: "Either username or password is incorrect" });
      }
      let token = jwt.generateAccessToken(
        username,
        result.toObject(),
        process.env.JWT_SECRET
      );
      res.setHeader("Authorization", token);
      res.status(200).json({ data: result, token: token });
    });
  });
});

userRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;

  User.findByIdAndUpdate(id, update, { new: true }, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    if (result === null || result === []) {
      res.status(404).json({ message: error.message });
    }
    res.status(202).json({ data: result });
  });
});

userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id, (error, result) => {
    if (error) {
      res.status(404).json({ message: error.message });
    }
    res.status(204).json({ status: "deleted" });
  });
});

module.exports = userRouter;

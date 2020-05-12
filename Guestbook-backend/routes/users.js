const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");
var jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// signup
router.post("/signup", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  const { name, username, email, age, password, password1 } = req.body;
  let errors = [];
  // All required field are present?
  if (!name || !username || !email || !age || !password || !password1) {
    errors.push("Please fill in all the fields");
  }

  // Passwords match?
  if (password !== password1) {
    errors.push("Passwords do not match");
  }

  // check pass length
  if (password && password.length < 6) {
    errors.push("Password should be at least 6 characters");
  }

  if (errors.length > 0) {
    return res.status(400).send({ message: errors.join(" & ") });
  }

  // validation passed
  try {
    const userWithSameEmail = await User.findOne({ email: email });
    if (userWithSameEmail) {
      return res
        .status(409)
        .json({ message: "User email has been used before" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      age,
      username,
    });
    const newUser = await user.save();
    newUser.password = undefined;

    return res.status(201).json({ message: "Successfully Created a new user" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found" });
    }

    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      return res.status(401).send({
        success: false,
        msg: "Authentication failed. Wrong password.",
      });
    }
    var token = jwt.sign(user.toJSON(), "SecretKey");
    user.password = undefined;
    res
      .status(201)
      .json({ token: "JWT " + token, user: JSON.parse(JSON.stringify(user)) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

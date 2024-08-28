const express = require("express");
const { User } = require("../db");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const userSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  const { success } = userSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ error: "Invalid data!!" });
  }

  try {
    const userExist = await User.findOne({
      username: req.body.username,
    });

    if (userExist) {
      return res.status(400).json({ error: "User already exists!!" });
    }

    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const userId = newUser._id;
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.status(201).json({
      message: "User created successfully!!",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: `Internal server error, ${error}` });
  }
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  try {
    const userExist = await User.findOne({
      username: req.body.username,
    });

    if (!userExist) {
      return res.status(400).json({ error: "User not found!!" });
    } else if (userExist.password !== req.body.password) {
      return res.status(400).json({ error: "Invalid password!!" });
    } else {
      const userId = userExist._id;
      const token = jwt.sign({ userId }, JWT_SECRET);
      res.status(200).json({
        message: "User signed in successfully!!",
        token: token,
      });
    }

    res.status(411).json({
      message: "Error while logging in",
    });
  } catch (error) {
    res.status(500).json({ error: `Internal server error, ${error}` });
  }
});

module.exports = router;

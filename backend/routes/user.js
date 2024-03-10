const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware/index");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const schema = zod.object({
    firstName: zod.string().min(2).max(50),
    lastName: zod.string().min(2).max(50),
    username: zod.string().email(),
    password: zod.string().min(6),
  });

  const data = req.body;

  const { success } = schema.safeParse(data);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken/ Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: data.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  const newUser = await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    password: data.password,
  });

  const userId = newUser._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({
    message: "User created successfully",
    token,
  });
});

router.post("/signin", async (req, res) => {
  const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
  });

  const data = req.body;

  const { success } = schema.safeParse(data);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: data.username,
    password: data.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while loggin in",
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const schema = zod.object({
    firstName: zod.string().min(2).max(50).optional(),
    lastName: zod.string().min(2).max(50).optional(),
    password: zod.string().min(6).optional(),
  });

  const data = req.body;

  const { success } = schema.safeParse(data);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating info",
    });
  }

  await User.updateOne({ _id: data.userId }, data);

  res.json({
    message: "Info updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;

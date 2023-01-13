const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  res.json({ message: "Register User" });
});

const login = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data" });
});

module.exports = {
  register,
  login,
  getMe,
};

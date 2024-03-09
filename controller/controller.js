// user.controller.js
const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const payload = {};
    const username = "username";
    const email = "12345678";
    payload.newUser = await User.create({ username, email });

    payload.accessToken = jwt.sign(
      { userId: payload.newUser.id },
      process.env.APP_KEY
    );

    console.log(payload.accessToken);
    res.status(201).json(payload);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
};

const editUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, email } = req.body;

    // Find the user by ID
    const user = await User.findByPk(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user data
    user.username = username;
    user.email = email;

    // Save the changes to the database
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error editing user:", error);
    res.status(500).send("Internal Server Error");
  }
};


module.exports = { createUser, getAllUsers, editUser };

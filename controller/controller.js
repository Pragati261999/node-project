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

const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.APP_KEY);

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    payload = {};

    payload.user = await User.findOne({ where: { email } });

    if (!payload.user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, payload.user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (payload.user.role === "user") {
      payload.token = jwt.sign(
        { userId: payload.user.id },
        process.env.APP_KEY
      );
      res.status(200).json({ payload });
    }

    if (payload.user.role === "teacher") {
      payload.token = jwt.sign(
        { userId: payload.user.id },
        process.env.APP_KEY
      );
      res.status(200).json({ payload });
    }

    res.status(200).json({ payload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createUser, getAllUsers, editUser, signup, login };

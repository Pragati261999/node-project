

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Course = require("../models/Course.model");

const addcourse = async (req, res, next) => {
  const { course_name, course_type, course_code } = req.body;

  const course = await Course.create({
    course_name,
    course_type,
    course_code,
  });
  res.status(200).json(course);
};

const getcourse = async (req, res, next) => { 
  const course = await Course.findAll();
  res.status(200).json(course);
}


const editCourse = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { course_name, course_type } = req.body;

    // Find the user by ID
    const user = await Course.findByPk(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update user data
    user.course_name = course_name;
    user.course_type = course_type;

    // Save the changes to the database
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error editing user:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addcourse,
  getcourse,
  editCourse,
};

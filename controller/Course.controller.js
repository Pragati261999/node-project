

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Course = require("../models/Course.model");

const addcourse = async (req, res, next) => {
  const {
      couser_name,
      couser_type,
  } = req.body;

  const course = await Course.create({
    couser_name,
    couser_type,
  });
  res.status(200).json(course);
};

const getcourse = async (req, res, next) => { 
  const course = await Course.findAll();
  res.status(200).json(course);
}

module.exports = {
  addcourse,getcourse
};

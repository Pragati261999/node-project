const Subject = require("../models/Subject.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addsubject = async (req, res, next) => {
  const { course_id, subject_name, subject_code } = req.body;
  const addsubject = await Subject.create({
    course_id,
    subject_name,
    subject_code,
  });
  res.status(200).json(addsubject);
};



const getsubject = async (req, res, next) => { 
  const getsubject = await Subject.findAll();
  res.status(200).json(getsubject);
}

module.exports = {
  addsubject,
  getsubject
};

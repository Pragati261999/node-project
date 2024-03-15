const Subject = require("../models/Questions.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Questions = require("../models/Questions.model");

const addquestions = async (req, res, next) => {
  const teacher_id = req.params.teacher_id;

  console.log(teacher_id);

  const {
    course_id,
    subject_id,
    question_type,
    question,
    faculty_id,
    question_level,
    marks
  } = req.body;

  const addquestions = await Questions.create({
    course_id,
    subject_id,
    question_type,
    question,
    faculty_id,
    question_level,
    marks,
  });
  res.status(200).json(addquestions);
};


const getquestions = async (req, res, next) => { 
  const addquestions = await Questions.findAll();
  res.status(200).json(addquestions);
}

module.exports = {
  addquestions,
  getquestions,
};

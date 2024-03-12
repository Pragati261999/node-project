const Subject = require("../models/Questions.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Questions = require("../models/Questions.model");

const addquestions = async (req, res, next) => {
  const teacher_id = req.params.teacher_id;

  console.log(teacher_id);

  const { question_type, question, options, entry_type } = req.body;

  const addquestions = await Questions.create({
    question_type,
    question,
    options,
    entry_type,
  });
  res.status(200).json(addquestions);
};

module.exports = {
  addquestions,
};

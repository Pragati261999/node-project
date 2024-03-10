const Subject = require("../models/subject.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addsubject = async (req, res, next) => {
  const teacher_id = req.params.teacher_id;

  console.log(teacher_id);

  const Subject_name = req.body.Subject_name;
  console.log(Subject_name);

  const addsubject = await Subject.create({ teacher_id, Subject_name });
  res.status(200).json(addsubject);
};


module.exports = {
  addsubject,
};

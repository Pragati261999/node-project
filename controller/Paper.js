const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Paper = require("../models/Paper.model");

const addpaper = async (req, res, next) => {
  const { paper_code, start_time, end_time, schedule_date, course_code, sub_code } = req.body;

  const paper = await Paper.create({
    paper_code,
    start_time,
    end_time,
    schedule_date,
    course_code,
    sub_code,
  });
  res.status(200).json(paper);
};




module.exports = {
  addpaper,
  getpaper,
};

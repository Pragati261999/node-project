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

const getpaper = async (req, res, next) => {
  const paper = await Paper.findAll();
  res.status(200).json(paper);
};


const editPaper = async (req, res, next) => {
  try {
    const paperId = req.params.paperId; // Assuming you pass paperId in the URL
    const {
      paper_code,
      start_time,
      end_time,
      schedule_date,
      course_code,
      sub_code,
    } = req.body;

    // Check if the paper exists
    const paper = await Paper.findByPk(paperId);
    if (!paper) {
      return res.status(404).json({ error: "Paper not found" });
    }

    // Update the paper fields
    paper.paper_code = paper_code;
    paper.start_time = start_time;
    paper.end_time = end_time;
    paper.schedule_date = schedule_date;
    paper.course_code = course_code;
    paper.sub_code = sub_code;

    // Save the updated paper
    await paper.save();

    res.status(200).json(paper);
  } catch (error) {
    console.error("Error editing paper:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




module.exports = {
  addpaper,
  getpaper,
  editPaper,
};

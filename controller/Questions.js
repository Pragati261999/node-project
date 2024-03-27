const Subject = require("../models/Questions.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Questions = require("../models/Questions.model");
const Course = require("../models/Course.model");

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
    marks,
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

  const questionwithsubjects = await Promise.all(
    addquestions.map(async (quest) => {
      const subjectId = quest.subject_id;
      const courseId = quest.course_id;
      const subject = await Subject.findOne({
        where: { subject_id: subjectId },
      });
      const course = await Course.findOne({
        where: { course_id: courseId },
      });
      return {
        ...addquestions.toJSON(),
        subject: subject ? subject.toJSON() : null,
        course: course ? course.toJSON() : null,
      };
    })
  );
  res.status(200).json(questionwithsubjects);
};

const editQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.questionId; // Get the question ID from the request parameters

    // Destructure the request body
    const {
      course_id,
      subject_id,
      question_type,
      question,
      faculty_id,
      question_level,
      marks,
    } = req.body;

    // Find the question to edit by its ID
    const existingQuestion = await Questions.findByPk(questionId);

    // Check if the question exists
    if (!existingQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    // Update the question properties
    existingQuestion.course_id = course_id;
    existingQuestion.subject_id = subject_id;
    existingQuestion.question_type = question_type;
    existingQuestion.question = question;
    existingQuestion.faculty_id = faculty_id;
    existingQuestion.question_level = question_level;
    existingQuestion.marks = marks;

    // Save the updated question
    await existingQuestion.save();

    // Return the updated question in the response
    res.status(200).json(existingQuestion);
  } catch (error) {
    // Handle errors
    console.error("Error editing question:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addquestions,
  getquestions,
  editQuestion,
};

const Subject = require("../models/Questions.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const QuestionResponse = require("../models/QuestionResponses.model");

const addquestionsresponses = async (req, res) => {
  try {
    const newQuestionResponse = await QuestionResponse.create(req.body);
    res.status(201).json(newQuestionResponse);
  } catch (error) {
    console.error('Error creating question response:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addquestionsresponses,
};

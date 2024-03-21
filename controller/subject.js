const Subject = require("../models/Subject.model");
const Course = require("../models/Course.model");

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

// const getsubject = async (req, res, next) => {
//   const getsubject = await Subject.findAll();
//   res.status(200).json(getsubject);
// }
const getsubject = async (req, res, next) => {
  try {
    // Fetch subjects from Subject table
    const subjects = await Subject.findAll();

    // Fetch corresponding course details for each subject
    const subjectsWithCourses = await Promise.all(
      subjects.map(async (subject) => {
        const courseId = subject.course_id; // Assuming 'course_id' is the attribute in the Subject table
        const course = await Course.findOne({ where: { course_id: courseId } }); // Assuming 'id' is the primary key in the Course table

        return {
          ...subject.toJSON(), // Convert subject object to JSON
          course: course ? course.toJSON() : null, // Include course details if found, else null
        };
      })
    );

    res.status(200).json(subjectsWithCourses);
  } catch (error) {
    // Handle errors
    console.error("Error fetching subjects with course details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  addsubject,
  getsubject,
};

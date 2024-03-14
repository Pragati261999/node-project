// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const Questions = sequelize.define("Questions", {
  question_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subject_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more columns here
  question_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  faculty_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  question_level: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  marks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Add more columns as needed
});

// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("Question table created or already exists");
  } catch (error) {
    console.error("Error creating Question table:", error);
  }
})();

module.exports = Questions;

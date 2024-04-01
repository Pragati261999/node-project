// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const QuestionOptions = sequelize.define("QuestionOptions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  options: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more columns here
  answer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: { type: DataTypes.INTEGER, allowNull: false },

  // Add more columns as needed
});

// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("QuestionOptions table created or already exists");
  } catch (error) {
    console.error("Error creating QuestionOptions table:", error);
  }
})();

module.exports = QuestionOptions;

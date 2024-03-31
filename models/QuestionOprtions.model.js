// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const QuestionOption = sequelize.define("QuestionResponse", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seleted_option: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more columns here
  user_id: {
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
    console.log("QuestionResponse table created or already exists");
  } catch (error) {
    console.error("Error creating QuestionResponse table:", error);
  }
})();

module.exports = QuestionResponse;

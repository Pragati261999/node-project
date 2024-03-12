// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const Questions = sequelize.define("Questions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teacher_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more columns here
  options: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  entry_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Add more columns as needed
});

// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("Questions table created or already exists");
  } catch (error) {
    console.error("Error creating users table:", error);
  }
})();

module.exports = Questions;

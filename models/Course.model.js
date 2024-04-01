// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const Course = sequelize.define("Course", {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
});

// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("Course table created or already exists");
  } catch (error) {
    console.error("Error creating Course table:", error);
  }
})();

module.exports = Course;

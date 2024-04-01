// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");
const Course = require("../models/Course.model");
const Questions = require("./Questions.model");

const Subject = sequelize.define("Subject", {
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subject_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Subject.belongsTo(Course, { foreignKey: 'course_id' }); // Establishing one-to-many relationship
Subject.hasMany(Questions, { foreignKey: 'subject_id' }); // Establishing one-to-many relationship


// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("Subject table created or already exists");
  } catch (error) {
    console.error("Error creating Subject table:", error);
  }
})();

module.exports = Subject;

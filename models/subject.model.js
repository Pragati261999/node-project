// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const Subject = sequelize.define("Subject", {
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

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

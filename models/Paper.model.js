// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const Paper = sequelize.define("Paper", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paper_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more columns here
  end_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  schedule_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  course_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sub_code: {
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
    console.log("Paper table created or already exists");
  } catch (error) {
    console.error("Error creating Paper table:", error);
  }
})();

module.exports = Paper;

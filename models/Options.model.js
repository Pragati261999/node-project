// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const Option = sequelize.define("Option", {
  option_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  option: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("Option table created or already exists");
  } catch (error) {
    console.error("Error creating Option table:", error);
  }
})();

module.exports = Option;

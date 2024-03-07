// user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../app");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database to create the table
(async () => {
  try {
    await sequelize.sync();
    console.log("Users table created or already exists");
  } catch (error) {
    console.error("Error creating users table:", error);
  }
})();

module.exports = User;

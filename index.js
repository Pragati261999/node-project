require("dotenv").config();

const express = require("express");
const compression = require("compression");

const db = require("../node-start/app"); // Correct path to your Sequelize instance
const userRoutes = require("../node-start/routes/user.route");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");

const app = express();
const port = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Add sequelize.authenticate() to ensure the database connection is established
db.authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.json());
app.use(compression());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("App is working fine!!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

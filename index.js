require("dotenv").config();

const express = require("express");
const compression = require("compression");

const db = require("../node-start/app"); // Correct path to your Sequelize instance
const userRoutes = require("../node-start/routes/user.route");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
// Enable CORS for all routes
const corsOptions = {
  origin: ["http://localhost:5173", "http://your-other-allowed-origin"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (cookies, authorization headers)
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

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

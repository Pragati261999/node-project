// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const { userSchema } = require("../routes/schema");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Swagger API",
      version: "1.0.0",
      description: "A simple API with Swagger documentation",
    },
    components: {
      schemas: {
        userSchema,
      },
    },
  },
  apis: ["./routes/*.js"], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;

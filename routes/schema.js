// schemas.js
const userSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
  required: ["username", "email"],
};

module.exports = {
  //   userSchema,
  create: {
    description: "Create a User",
    tags: "Uers",
    summary: "Create an App User",
    body: userSchema,
    response: "response_mediums",
  },
};

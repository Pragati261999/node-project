// user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/controller.js");

router.post("/adduser", userController.createUser);

router.get("/getusers", userController.getAllUsers); // New route for fetching all users


module.exports = router;

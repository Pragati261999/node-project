// user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/controller.js");
const Schema = require("./schema.js");



router.post("/adduser", userController.createUser );

router.get("/getusers", userController.getAllUsers);

router.put("update/:userId", userController.editUser);

router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;

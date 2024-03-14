// user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/controller.js");
const subjectController = require("../controller/subject.js");
const questionController = require("../controller/Questions.js");
const Schema = require("./schema.js");



router.post("/adduser", userController.createUser );

router.get("/getusers", userController.getAllUsers);

router.put("update/:userId", userController.editUser);

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.post("/addsubject", subjectController.addsubject);
router.post("/addquestions", questionController.addquestions);




module.exports = router;

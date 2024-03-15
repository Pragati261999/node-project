// user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/controller.js");
const subjectController = require("../controller/subject.js");
const questionController = require("../controller/Questions.js");
const courseController = require("../controller/Course.controller.js");
const Schema = require("./schema.js");



router.post("/adduser", userController.createUser );

router.get("/getusers", userController.getAllUsers);

router.put("update/:userId", userController.editUser);

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.post("/addsubject", subjectController.addsubject);
router.get("/getsubject", subjectController.getsubject);
router.post("/addquestions", questionController.addquestions);
router.get("/getquestions", questionController.getquestions);


// course route
router.post("/addcourse", courseController.addcourse);
router.get("/getcourse", courseController.getcourse);






module.exports = router;

// routes/quizRouter.js

const express = require("express");
const router = express.Router();

const quizController = require("../models/quizSchema");
//Create a new Quiz
router.post("/Createq", quizController.createQuiz);

//Get all Quizzes
router.get("/Quizget", quizController.getAllQuizzes);

//Get a single Quiz bu Id
router.get("/quizsingle/:id", quizController.getQuizById);

//Update a quiz by ID
router.patch("/quiz/:id", quizController.updateQuizById);

//Delete a auiz by ID
router.delete("/quize/:id", quizController.deleteQuizById);

module.exports = router;


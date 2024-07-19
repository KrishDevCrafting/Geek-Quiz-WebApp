// routes/quizRouter.js

const express = require("express");
const router = express.Router();

const quizController = require("../models/quizSchema");
//Create a new Quiz
router.post("/Create", function (req, res) {
  quizController.createQuiz;
});

//Get all Quizzes
router.get("/Quizget", function (req, res) {
  quizController.getAllQuizzes;
});

//Get a single Quiz bu Id
router.get("/quizsingle/:id", function (req, res) {
  quizController.getQuizById;
});

//Update a quiz by ID
router.patch("/quiz/:id", function (req, res) {
  quizController.updateQuizById;
});

//Delete a auiz by ID
router.delete("/quize/:id", function (req, res) {
  quizController.deleteQuizById;
});

module.exports = router;

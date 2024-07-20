const express = require("express");
const router = express.Router();

const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
} = require("../controllers/quizController"); // Adjust the path if necessary

// Create a new Quiz
router.post("/create", async (req, res) => {
  try {
    const quiz = await createQuiz(req, res);
    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all Quizzes
router.get("/get", async (req, res) => {
  try {
    const quizzes = await getAllQuizzes(req, res);
    res.status(200).send(quizzes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a single Quiz by Id
router.get("/:id", async (req, res) => {
  try {
    const quiz = await getQuizById(req, res);
    if (!quiz) {
      res.status(404).send("Quiz not found");
    } else {
      res.status(200).send(quiz);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a quiz by ID
router.patch("/:id", async (req, res) => {
  try {
    const quiz = await updateQuizById(req, res);
    if (!quiz) {
      res.status(404).send("Quiz not found");
    } else {
      res.status(200).send(quiz);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a quiz by ID
router.delete("/:id", async (req, res) => {
  try {
    const quiz = await deleteQuizById(req, res);
    if (!quiz) {
      res.status(404).send("Quiz not found");
    } else {
      res.status(200).send("Quiz deleted successfully");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

// streak code
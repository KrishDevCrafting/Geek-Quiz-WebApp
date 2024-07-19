// controllers/quizController.js

const Quiz = require("../models/quizSchema"); // Adjust the path if necessary

// Create a new quiz
const createQuiz = async (req, res) => {
  const { title } = req.body;
  try {
    const quiz = new Quiz({
      title,
    });
    await quiz.save();
    res.status(201).send({
      message: "Quiz is add",
      quiz,
    });
  } catch (error) {
    res.status(400).send({
      message: "error",
      error,
    });
  }
};

// Get all quizzes
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).send(quizzes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single quiz by ID
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).send();
    }
    res.status(200).send(quiz);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a quiz by ID
const updateQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!quiz) {
      return res.status(404).send();
    }
    res.status(200).send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a quiz by ID
const deleteQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).send();
    }
    res.status(200).send(quiz);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
};

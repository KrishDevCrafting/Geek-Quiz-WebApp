const Quiz = require("../models/quizSchema");

const creatQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get all quizzes

const getAllQuizzes = async () => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).send(quizzes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get a single Quiz by ID

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

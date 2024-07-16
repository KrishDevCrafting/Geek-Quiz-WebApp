const mongoose = require("mongoose");

const questionScheme = new mongoose.Schema({
  text: { type: String, required: true },
  iscorrect: { type: Boolean, required: true },
});

const answerSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  answers: [answerSchema],
});

const quizSchma = new mongoose.String({
  title: { type: String, required: true },
  category: { type: String, required: true },
  question: { questionScheme },
});

const Quiz = mongoose.model("Quiz", quizSchma);

module.exports = Quiz;

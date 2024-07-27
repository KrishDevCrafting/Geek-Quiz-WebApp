import React, { useState } from "react";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answer) => {
    const isCorrect =
      answer === quizQuestions[currentQuestionIndex].correctAnswer;
    setUserAnswers([
      ...userAnswers,
      {
        question: quizQuestions[currentQuestionIndex].question,
        answer,
        isCorrect,
      },
    ]);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      {!quizCompleted ? (
        <>
          <h2>{quizQuestions[currentQuestionIndex].question}</h2>
          {quizQuestions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelection(option)}>
              {option}
            </button>
          ))}
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <h3>Your Results:</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>
                {answer.question} - Your answer: {answer.answer} -{" "}
                {answer.isCorrect ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizApp;

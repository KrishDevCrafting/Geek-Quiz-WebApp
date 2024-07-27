import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const userFetch = async () => {
      const response = await fetch("http://localhost:7000/user/get");
      const res = await response.json();
      setUserAnswers(res);
    };
    userFetch();
  }, []);

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
    <>
      <div>
        {userAnswers.map((e) => (
          <h1 className="text-red-700 text-4xl text-center">{e.title}</h1>
        ))}
      </div>
      <div>
        {!quizCompleted ? (
          <>
            <h2>{quizQuestions[currentQuestionIndex].question}</h2>
            {quizQuestions[currentQuestionIndex].options.map(
              (option, index) => (
                <button
                  className="text-blue-500 p-2 m-2 hover:bg-orange-400"
style={{border: "1px solid red"}}
                  key={index}
                  onClick={() => handleAnswerSelection(option)}
                >
                  {option}
                </button>
              )
            )}
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
    </>
  );
};

export default QuizApp;

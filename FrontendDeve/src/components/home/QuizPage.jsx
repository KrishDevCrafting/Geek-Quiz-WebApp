import React, { useEffect, useState } from "react";
import "./quizStyle.css";
import { useSelector } from "react-redux";
export const QuizComponent = () => {
  // const [value, setValue] = useState(2);

  const user = useSelector((state) => state.user.value);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const handleNextQuestion = () => {
  //   setSelectedOption(null); // Reset selected option
  //   setCurrentQuestionIndex(currentQuestionIndex + 1);
  // };
  // const { data, setdata } = React.useState([]);

  // if (user === false) {
  //   setValue(2);
  // } else {
  //   setValue(0);
  // }
  // console.log(user, "hello");

  useEffect(() => {
    fetch("https://geek-quiz.onrender.com/user/get")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (user >= 0 && user < data.length) {
          setQuizData(data[user]);

          // Assuming the first element contains the quiz data
        } else {
          setError("No quiz data available");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setError("Failed to load quiz data.");
        setLoading(false);
      });
  }, [user]);

  const handleAnswerSelection = (answerIndex) => {
    if (!quizData) return;

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctOption;

    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.questionText,
        answer: currentQuestion.options[answerIndex],
        isCorrect,
      },
    ]);

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000); // Delay of 1 second
    } else {
      setTimeout(() => {
        setQuizCompleted(true);
      }, 1000); // Delay of 1 second
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return <div>No quiz data available</div>;
  }

  window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
  };
  // Add reload Functionality
  const questions = quizData.questions;

  return (
    <div className="parent-div">
      {!quizCompleted ? (
        <>
          <h1 className="text-4xl text-center my-4">
            {questions[currentQuestionIndex].questionText}
          </h1>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="space-y-2 flex  div-box">
              <input
                id={`option-${index}`}
                value={index}
                name={`question-${currentQuestionIndex}`}
                className="size-4 mt-4 radio-input"
                checked={selectedOption === index}
                onClick={() => handleAnswerSelection(index)} // Grouping radio buttons by question Groups radio buttons by the current question, ensuring only one can be selected at a time per question
                type="radio"
              />
              <label
                className="label-option radio-label"
                htmlFor={`option-${index}`}>
                <span class="radio-inner-circle"></span>
                <h1 className="">{option}</h1>
              </label>
              {/* <button onClick={handleNextQuestion}>next</button> */}
            </div>
          ))}
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <h3>Your Results:</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>
                <h1>
                  {answer.question} - Your answer: {answer.answer}
                </h1>
                {answer.isCorrect ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;

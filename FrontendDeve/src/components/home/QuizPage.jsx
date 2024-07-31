import React, { useEffect, useState } from "react";
import "./quizStyle.css";

export const QuizComponent = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/user/get")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setQuizData(data[0]); // Assuming the first element contains the quiz data
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
  }, []);

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

  const questions = quizData.questions;

  return (
    <div>
      {!quizCompleted ? (
        <>
          <h1 className="text-4xl">
            {questions[currentQuestionIndex].questionText}
          </h1>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="check-out">
              <label onClick={() => handleAnswerSelection(index)}>
                {option}
              </label>
              <input
                value="1"
                name={`option-${index}`}
                type="checkbox"
                id={`option-${index}`}
              />
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
                {answer.question} - Your answer: {answer.answer} -{" "}
                {answer.isCorrect ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    
  );





















  <div
  className="flex justify-center  items-center"
  style={{ border: "1px solid red", height: "50vh" }}
>
  <form action="">
    <div className="text-center my-4">
      <h1 className="text-4xl">Heading</h1>
    </div>
    <div id="checklist">
      <input value="1" name="r" type="checkbox" id="01" />
      <label for="01" className="">
        {/* {questions[currentQuestionIndex]} */}
      </label>
      <input value="2" name="r" type="checkbox" id="02" />
      <label for="02">48 Laws Power</label>
      <input value="3" name="r" type="checkbox" id="03" />
      <label for="03">Rich Dad and Poor Dad</label>
      <input value="3" name="r" type="checkbox" id="04" />
      <label for="04">Dark Psychology</label>
    </div>
  </form>
  <div></div>
</div>

















};

export default QuizComponent;

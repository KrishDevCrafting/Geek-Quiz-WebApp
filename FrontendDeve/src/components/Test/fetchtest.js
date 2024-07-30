import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7000/user/get')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setQuizData(data[0]); // Assuming the first element contains the quiz data
        } else {
          setError('No quiz data available');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
        setError('Failed to load quiz data.');
        setLoading(false);
      });
  }, []);

  const handleAnswerSelection = (answerIndex) => {
    if (!quizData) return;

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctOption;

    setUserAnswers([...userAnswers, { 
      question: currentQuestion.questionText, 
      answer: currentQuestion.options[answerIndex], 
      isCorrect 
    }]);

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
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
          <h2>{questions[currentQuestionIndex].questionText}</h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelection(index)}>
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
                {answer.question} - Your answer: {answer.answer} - {answer.isCorrect ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizApp;


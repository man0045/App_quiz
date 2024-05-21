import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      navigate('/result', { state: { score } });
    }
  };

  return (
    <div className="quiz">
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div className="options">
        {questions[currentQuestionIndex].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerOptionClick(option === questions[currentQuestionIndex].answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

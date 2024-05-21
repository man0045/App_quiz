import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score } = location.state;

  return (
    <div className="result">
      <h1>Your Score: {score}</h1>
      <Link to="/">
        <button>Restart Quiz</button>
      </Link>
    </div>
  );
};

export default Result;

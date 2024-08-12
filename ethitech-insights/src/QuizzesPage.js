// src/components/QuizzesPage.js
import React, { useState } from 'react';

const quizzes = [
  {
    question: "What should you do if you find a software bug that could potentially leak user data?",
    options: ["Ignore it", "Report it immediately", "Exploit it", "Tell your friends"],
    answer: 1
  },
  {
    question: "Is it ethical to use user data for research without their explicit consent?",
    options: ["Yes, always", "No, never", "Only if it benefits them", "Only with consent"],
    answer: 3
  },
];

const QuizzesPage = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    setUserAnswer(index);
    setSubmitted(false);
  };

  const submitAnswer = () => {
    if (userAnswer === quizzes[currentQuiz].answer) {
      setScore(score + 1);
    }
    setSubmitted(true);
    setUserAnswer(null); // Reset for next question
  };

  const nextQuestion = () => {
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSubmitted(false);
    } else {
      alert(`Your final score is ${score}/${quizzes.length}`);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-3">Mini Ethics Quizzes</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{quizzes[currentQuiz].question}</h5>
          <div className="list-group">
            {quizzes[currentQuiz].options.map((option, index) => (
              <button key={index} className={`list-group-item list-group-item-action${userAnswer === index ? ' active' : ''}`}
                onClick={() => handleOptionClick(index)} disabled={submitted}>
                {option}
              </button>
            ))}
          </div>
          {submitted && (
            <div className="mt-3">
              <p className="text-success">{userAnswer === quizzes[currentQuiz].answer ? 'Correct!' : 'Wrong answer!'}</p>
            </div>
          )}
          <div className="mt-3">
            {!submitted ? (
              <button className="btn btn-primary" onClick={submitAnswer}>Submit Answer</button>
            ) : (
              <button className="btn btn-secondary" onClick={nextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;

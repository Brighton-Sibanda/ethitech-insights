// src/components/ThoughtCorner.js
import React, { useState } from 'react';

const thoughts = [
  { question: "What is the role of ethics in technology?", answer: "Ethics guide the responsible development and use of technology, ensuring it benefits society." },
  { question: "How can technology professionals prevent racial bias in algorithms?", answer: "By diversifying teams and implementing rigorous bias testing protocols." },
];

const ThoughtCorner = () => {
  const [flip, setFlip] = useState(null);

  const toggleFlip = (index) => {
    setFlip(flip === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-3">Thought Corner</h2>
      {thoughts.map((thought, index) => (
        <div key={index} className="card mb-3" onClick={() => toggleFlip(index)}>
          <div className="card-body">
            <h5 className="card-title">{thought.question}</h5>
            {flip === index && <p className="card-text">{thought.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThoughtCorner;

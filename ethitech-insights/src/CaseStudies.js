import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: "Data Privacy at a Social Media Company",
    steps: [
      {
        text: "You discover a flaw that exposes user emails. Do you:",
        options: [
          { answer: "Ignore it, it’s not your job.", nextStep: 2 },
          { answer: "Report it to your supervisor immediately.", nextStep: 3 }
        ]
      },
      {
        text: "The issue is minor and might cause panic. Do you:",
        options: [
          { answer: "Keep quiet, no need for drama.", nextStep: 4 },
          { answer: "Insist on notifying users, it’s their right.", nextStep: 5 }
        ]
      },
      {
        text: "Thanks for handling the situation ethically. Your decision helps protect user privacy."
      }
    ]
  }
];

const CaseStudy = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);

  const handleOptionClick = (nextStep) => {
    setCurrentStep(nextStep);
  };

  return (
    <div className="case-study-container">
      {selectedCase === null ? (
        <div>
          <h2>Select a Case Study</h2>
          {caseStudies.map((cs) => (
            <button key={cs.id} onClick={() => setSelectedCase(cs)}>
              {cs.title}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>{selectedCase.title}</h2>
          <p>{selectedCase.steps[currentStep].text}</p>
          {selectedCase.steps[currentStep].options && selectedCase.steps[currentStep].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option.nextStep)}>
              {option.answer}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudy;

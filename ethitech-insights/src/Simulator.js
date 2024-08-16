import React, { useState } from 'react';

const scenarios = [
  {
    id: 1,
    situation: "Your company can increase profits by lowering data protection standards. Do you:",
    options: [
      { decision: "Lower the standards and increase profits.", impact: "Profit up, trust down." },
      { decision: "Keep standards high to protect user data.", impact: "Profit steady, trust high." }
    ]
  }
];

const Simulator = () => {
  const [currentScenario, setCurrentScenario] = useState(null);
  const [decisionImpact, setDecisionImpact] = useState("");

  const handleDecision = (impact) => {
    setDecisionImpact(impact);
  };

  return (
    <div className="simulator-container">
      {currentScenario === null ? (
        <div>
          <h2>Choose a Scenario</h2>
          {scenarios.map((scenario) => (
            <button key={scenario.id} onClick={() => setCurrentScenario(scenario)}>
              {scenario.situation}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h3>{currentScenario.situation}</h3>
          {currentScenario.options.map((option, index) => (
            <button key={index} onClick={() => handleDecision(option.impact)}>
              {option.decision}
            </button>
          ))}
          <p>{decisionImpact}</p>
        </div>
      )}
    </div>
  );
};

export default Simulator;

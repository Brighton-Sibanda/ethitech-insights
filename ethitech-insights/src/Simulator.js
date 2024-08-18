import React, { useState } from 'react';


const scenarios = [
  {
    id: 1,
    situation: "Your company can increase profits by lowering data protection standards. Do you:",
    options: [
      { decision: "Lower the standards and increase profits.", impact: "Profit up, trust down." },
      { decision: "Keep standards high to protect user data.", impact: "Profit steady, trust high." }
    ]
  },
  {
    id: 2,
    situation: "A bug in your software has been found to expose user emails. Do you:",
    options: [
      { decision: "Quickly fix the bug and notify affected users.", impact: "Costs increase, but user trust is maintained." },
      { decision: "Ignore the bug to save on costs.", impact: "Costs saved, but risk of data breach increases." }
    ]
  },
  {
    id: 3,
    situation: "You discover that an AI model your company uses biases against minority groups. Do you:",
    options: [
      { decision: "Overhaul the AI system to remove biases, incurring high costs.", impact: "High cost, ethical integrity maintained." },
      { decision: "Continue using the model to avoid operational disruptions.", impact: "Operation smooth, ethical standing compromised." }
    ]
  },
  {
    id: 4,
    situation: "A lucrative client demands you install surveillance software that may invade employee privacy. Do you:",
    options: [
      { decision: "Reject the client's request to protect privacy.", impact: "Potential revenue lost, employee trust gained." },
      { decision: "Accede to the client's demands to secure the contract.", impact: "Revenue up, employee morale and trust possibly damaged." }
    ]
  },
  {
    id: 5,
    situation: "Your marketing team proposes using customer data to target vulnerable populations with high-cost loans. Do you:",
    options: [
      { decision: "Approve the targeting strategy to boost sales.", impact: "Sales increase, ethical reputation risks." },
      { decision: "Prohibit targeting vulnerable populations.", impact: "Sales growth moderated, ethical standards upheld." }
    ]
  },
  {
    id: 6,
    situation: "You find out a competitor's confidential information has accidentally been sent to you. Do you:",
    options: [
      { decision: "Use the information to gain a competitive advantage.", impact: "Short-term gain, potential legal consequences." },
      { decision: "Notify the competitor and delete the information.", impact: "Integrity upheld, competitor relations possibly improved." }
    ]
  },
  {
    id: 7,
    situation: "You have the option to automate a department, resulting in significant job losses. Do you:",
    options: [
      { decision: "Automate to increase efficiency and reduce costs.", impact: "Operational costs down, employee layoffs." },
      { decision: "Keep current staff and focus on upskilling.", impact: "Costs maintained, employee satisfaction and loyalty up." }
    ]
  },
  {
    id: 8,
    situation: "Your product inadvertently collects data that could be sold for a high profit. Do you:",
    options: [
      { decision: "Sell the data to increase revenue.", impact: "Revenue up, potential breach of user trust." },
      { decision: "Do not sell the data and ensure it is not misused.", impact: "Revenue steady, user trust preserved." }
    ]
  },
  {
    id: 9,
    situation: "You're offered a chance to cut costs by using suppliers with questionable labor practices. Do you:",
    options: [
      { decision: "Switch to the cheaper suppliers.", impact: "Costs reduced, corporate social responsibility compromised." },
      { decision: "Continue with current ethical suppliers.", impact: "Costs steady, ethical stance strengthened." }
    ]
  },
  {
    id: 10,
    situation: "An error in your product favors customers over the business in financial transactions. Do you:",
    options: [
      { decision: "Fix the error immediately, alerting customers.", impact: "Trust maintained, unexpected expenses incurred." },
      { decision: "Leave the error unaddressed to avoid detection.", impact: "Temporary gain, long-term trust issues if discovered." }
    ]
  },
  {
    id: 11,
    situation: "A test shows that your new feature may addict users but increase engagement significantly. Do you:",
    options: [
      { decision: "Launch the addictive feature to boost engagement.", impact: "Engagement up, potential for user harm." },
      { decision: "Rework the feature to be less addictive.", impact: "Engagement moderated, ethical responsibility upheld." }
    ]
  },
  {
    id: 12,
    situation: "You can cut significant development costs by not conducting thorough accessibility testing. Do you:",
    options: [
      { decision: "Skip accessibility testing to reduce costs.", impact: "Costs down, accessibility and inclusivity compromised." },
      { decision: "Conduct full accessibility testing.", impact: "Higher costs, product is accessible to a broader audience." }
    ]
  },
  {
    id: 13,
    situation: "A software update will obsolete older product models faster than usual. Do you:",
    options: [
      { decision: "Release the update to encourage new sales.", impact: "Sales up, customer dissatisfaction possible." },
      { decision: "Optimize the update to extend older models' lifespan.", impact: "Sales steady, customer loyalty increased." }
    ]
  },
  {
    id: 14,
    situation: "An employee whistleblows on unsafe practices within your company. Do you:",
    options: [
      { decision: "Address and correct the practices publicly.", impact: "Short-term PR challenge, long-term trust and safety improved." },
      { decision: "Suppress the information to avoid bad publicity.", impact: "Immediate issue avoided, potential future liabilities." }
    ]
  },
  {
    id: 15,
    situation: "You have a chance to lobby against data privacy regulations that would cost your company. Do you:",
    options: [
      { decision: "Lobby against the regulations to save costs.", impact: "Lower costs, public perception of company may worsen." },
      { decision: "Support the regulations to promote user privacy.", impact: "Higher costs, enhanced public trust." }
    ]
  },
  {
    id: 16,
    situation: "Your app can increase user interaction by subtly encouraging addictive behaviors. Do you:",
    options: [
      { decision: "Optimize for addiction to boost metrics.", impact: "User engagement up, ethical concerns about user health." },
      { decision: "Design responsibly to avoid addictive patterns.", impact: "Lower engagement metrics, higher ethical standards." }
    ]
  },
  {
    id: 17,
    situation: "You discover your team used copyrighted code in your product. Do you:",
    options: [
      { decision: "Keep the code to avoid redevelopment costs.", impact: "Costs saved, legal and ethical risks." },
      { decision: "Remove the copyrighted code and develop an alternative.", impact: "Increased costs, compliance with legal standards." }
    ]
  },
  {
    id: 18,
    situation: "You can outsource customer support to a cheaper but less skilled provider. Do you:",
    options: [
      { decision: "Outsource to reduce costs.", impact: "Operational costs down, customer satisfaction might decline." },
      { decision: "Keep current skilled providers despite higher costs.", impact: "Costs remain high, customer service quality maintained." }
    ]
  },
  {
    id: 19,
    situation: "You can use environmentally harmful materials at a lower cost. Do you:",
    options: [
      { decision: "Use cheaper materials to increase profits.", impact: "Profit margin improved, environmental impact increased." },
      { decision: "Opt for environmentally friendly materials at a higher cost.", impact: "Costs higher, sustainable practices promoted." }
    ]
  },
  {
    id: 20,
    situation: "You find a loophole in tax laws that could save your company money. Do you:",
    options: [
      { decision: "Exploit the loophole to reduce tax payments.", impact: "Financial gain, ethical and legal integrity questioned." },
      { decision: "Pay full taxes despite the loophole.", impact: "Financial cost, maintained legal and ethical standards." }
    ]
  }
];
const Simulator = () => {
  const [currentScenario, setCurrentScenario] = useState(null);
  const [decisionImpact, setDecisionImpact] = useState("");

  const handleDecision = (impact) => {
    setDecisionImpact(impact);
  };

  const handleBack = () => {
    setCurrentScenario(null); // Resets the view to the scenario selection
    setDecisionImpact("");    // Clears any displayed impact text
  };

  return (
    <div className="simulator-container">
      {currentScenario === null ? (
        <div className="scenario-selection">
          <h2>Choose a Scenario</h2>
          {scenarios.map((scenario) => (
            <button key={scenario.id} className="scenario-button" onClick={() => setCurrentScenario(scenario)}>
              {scenario.situation}
            </button>
          ))}
        </div>
      ) : (
        <div className="scenario-details">
          <h3>{currentScenario.situation}</h3>
          {currentScenario.options.map((option, index) => (
            <button key={index} className="decision-button" onClick={() => handleDecision(option.impact)}>
              {option.decision}
            </button>
          ))}
          <p className="impact-text">{decisionImpact}</p>
          <button className="back-button" onClick={handleBack}>Back to Scenarios</button>
        </div>
      )}
    </div>
  );
};

export default Simulator;

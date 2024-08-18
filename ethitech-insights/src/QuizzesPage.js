// src/components/QuizzesPage.js
import React, { useState, useEffect } from 'react';

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
    {
        question: "Which of the following is NOT true about ethics according to the article from scu about ethics in tech practice?",
        options: ["Ethics is a set of fixed rules", "Ethics promotes human flourishing", "Ethics involves living with integrity", "Ethics is about minimizing harm"],
        answer: 0
    },
    {
        question: "What does ethical practice in technology primarily focus on?",
        options: ["Increasing technological complexity", "Maximizing profits", "Minimizing environmental impact", "Promoting human dignity and minimizing harm"],
        answer: 3
    },
    {
        question: "Which is a primary concern of technology ethics mentioned in the article from scu about ethics in tech practice?",
        options: ["Algorithmic bias and injustice", "Faster internet speeds", "Developing more apps", "Reducing production costs"],
        answer: 0
    },
    {
        question: "What metaphor is used in the article from scu about ethics in tech practice to describe spotting ethical issues?",
        options: ["Like fishing in a vast ocean", "Like hunting in a dense forest", "Like birdwatching", "Like digging for treasure"],
        answer: 2
    },
    {
        question: "What role does 'Tech Solutionism' play according to the article from scu about ethics in tech practice?",
        options: ["It solves all technological issues", "It refers to using technology to address social and ethical challenges", "It places unwarranted faith in technology to solve ethical issues", "It enhances corporate responsibility"],
        answer: 2
    },
    {
        question: "What is NOT a suggested tool to build ethics in tech practice?",
        options: ["Case studies", "Random guessing", "Conceptual frameworks", "Professional exercises"],
        answer: 1
    },
    {
        question: "How can technological design decisions impact society according to the article from scu about ethics in tech practice?",
        options: ["They are irrelevant to societal norms", "They can shape social, political, and economic conditions", "They only affect the tech industry", "They reduce individual responsibility"],
        answer: 1
    },
    {
        question: "Which aspect is emphasized as necessary for ethical technology practice?",
        options: ["Following legal standards strictly", "Ignoring long-term consequences", "Cultivating ethical skills and integrating them into daily practices", "Focusing solely on innovation"],
        answer: 2
    },
    {
        question: "What is described as a misunderstanding about ethics?",
        options: ["Ethics as a set of flexible guidelines", "Ethics as a set of fixed rules", "Ethics as an evolving field", "Ethics solely as legal compliance"],
        answer: 1
      },
      {
        question: "Which is a correct statement about ethics in the technology context?",
        options: ["Ethics is primarily about following laws", "Ethics is about promoting objective human conditions", "Ethics is not concerned with human dignity", "Ethics encourages uncritical obedience to authority"],
        answer: 1
      },
      {
        question: "What does practical ethics focus on?",
        options: ["Theoretical knowledge only", "Translating ethical knowledge into action", "Ignoring contemporary issues", "Focusing only on past ethical principles"],
        answer: 1
      },
      {
        question: "Which ethical concern is related to AI and technology use?",
        options: ["Increased transparency", "Reduced algorithmic bias", "Growing machine autonomy and declining human control", "Enhanced data security automatically"],
        answer: 2
      },
      {
        question: "What is a major impact of technology on the environment mentioned in the article from scu about ethics in tech practice?",
        options: ["Decreased energy consumption", "Increased carbon emissions and resource depletion", "Improved recycling methods", "Reduction in electronic waste"],
        answer: 1
      },
      {
        question: "How is 'Tech Monoculture' detrimental according to the article from scu about ethics in tech practice?",
        options: ["It promotes diversity", "It reduces technological innovation", "It prevents understanding diverse human needs", "It enhances global connectivity"],
        answer: 2
      },
      {
        question: "What metaphor is used to explain the identification of ethical issues?",
        options: ["Like solving a puzzle", "Like birdwatching", "Like reading a book", "Like playing a sport"],
        answer: 1
      },
      {
        question: "What is NOT a type of ethics discussed?",
        options: ["Normative Ethics", "Descriptive Ethics", "Predictive Ethics", "Theoretical Ethics"],
        answer: 2
      },
      {
        question: "Which is a key aspect of ethical practice in tech?",
        options: ["Seeking maximum profitability", "Ignoring long-term effects", "Integrating ethics into daily practices", "Focusing solely on compliance"],
        answer: 2
      },
      {
        question: "What challenge does 'Digital Taylorism' pose?",
        options: ["It simplifies tasks", "It promotes worker autonomy", "It can be dehumanizing and demoralizing", "It decreases managerial control"],
        answer: 2
      },
      {
        question: "Which ethical tool is designed to help recognize and describe ethical issues?",
        options: ["Mathematical models", "Conceptual frameworks", "Financial incentives", "Regulatory compliance"],
        answer: 1
      },
      {
        question: "Why is ethical reform needed in tech according to the article from scu about ethics in tech practice?",
        options: ["To simplify technology use", "To decrease overall costs", "To mitigate amplified harms due to ethical failures", "To increase company profits"],
        answer: 2
      },
      {
        question: "What does ethical technology practice aim to promote?",
        options: ["Human flourishing and sustainable life", "Short-term benefits", "Individual success over collective good", "Technology dependence"],
        answer: 0
      },
      {
        question: "What describes the impact of 'The Attention Economy'?",
        options: ["It enhances learning and productivity", "It strains cognitive and emotional health", "It reduces social media use", "It increases face-to-face interactions"],
        answer: 1
      },
      {
        question: "Which is NOT a factor in ethical technology practice?",
        options: ["Ensuring high-speed internet access", "Cultivating a moral and ethical character", "Promoting justice and minimizing harm", "Incorporating ethical skills into design"],
        answer: 0
      },
      {
        question: "What is essential for maintaining ethical standards in tech companies?",
        options: ["High profitability", "Low employee turnover", "Integration of ethics at all levels of decision-making", "Focusing on legal compliance only"],
        answer: 2
      },
      {
        question: "What role does artificial intelligence play in ethical concerns?",
        options: ["Solving all ethical issues", "Posing potential existential risks", "Decreasing all forms of bias", "Eliminating the need for ethical considerations"],
        answer: 1
      },
      {
        question: "What does declining transparency in technology lead to?",
        options: ["Easier access to information", "Challenges in regulating new technologies", "Fewer ethical dilemmas", "Enhanced user trust"],
        answer: 1
      },
      {
        question: "What does the article from scu about ethics in tech practice suggest is necessary to combat tech-driven challenges?",
        options: ["More technology", "Robust social, political, and economic reforms", "Complete reliance on AI", "Ignoring ethical considerations"],
        answer: 1
      },
      {
        question: "What best describes 'New Digital Taylorism' according to the article from scu about ethics in tech practice?",
        options: ["Enhanced employee satisfaction", "A return to traditional manufacturing techniques", "AI-driven scientific management and control", "Reduced workplace surveillance"],
        answer: 2
      },
];

const QuizzesPage = () => {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (userAnswer !== null && !submitted) {
            if (userAnswer === quizzes[currentQuiz].answer) {
                setScore(prevScore => prevScore + 1); // Functional update to address dependency issue
            }
            setSubmitted(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAnswer]); // currentQuiz and submitted are deliberately omitted here if they don't change across this effect's calls

    const handleOptionClick = (index) => {
        setUserAnswer(index);
    };

    const nextQuestion = () => {
        if (currentQuiz < quizzes.length - 1) {
            setCurrentQuiz(currentQuiz + 1);
            setUserAnswer(null); // Reset for next question
            setSubmitted(false);
        } else {
            alert(`Your final score is ${score}/${quizzes.length}`);
            setCurrentQuiz(0); // Optionally reset the quiz
            setScore(0); // Optionally reset the score
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
                        <p className={userAnswer === quizzes[currentQuiz].answer ? 'text-success' : 'text-danger'}>
                        {userAnswer === quizzes[currentQuiz].answer ? 'Correct!' : 'Wrong answer!'}
                        </p>
                      </div>)}
                    <div className="mt-3">
                        {submitted ? (
                            <button className="btn btn-secondary" onClick={nextQuestion}>Next Question</button>
                        ) : (
                            <button className="btn btn-primary" onClick={() => setUserAnswer(userAnswer)}>Submit Answer</button>
                        )}
                    </div>
                </div>
                <div className="score-display bg-light p-2 rounded">
                              <span className="badge bg-info text-dark">Score: {score} / {currentQuiz}</span>
                            </div>
            </div>
        </div>
    );
};

export default QuizzesPage;

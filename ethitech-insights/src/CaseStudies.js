import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: "Data Privacy at a Social Media Company",
    steps: [
      {
        text: `You are a mid-level software engineer at a leading social media company. One day, while working on a routine update, you accidentally stumble upon a vulnerability in the platform's codebase. This flaw exposes the email addresses of users, leaving them vulnerable to spam, phishing attacks, and other privacy invasions. The vulnerability is not immediately obvious, but with the right knowledge, it could be easily exploited. Realizing the potential implications of this flaw, you begin to weigh your options. Do you:`,
        options: [
          { answer: "Ignore it, it’s not your job.", nextStep: 2 },
          { answer: "Report it to your supervisor immediately.", nextStep: 3 }
        ]
      },
      {
        text: `You decide to ignore the flaw, rationalizing that it’s not your responsibility. Weeks go by, and you continue with your regular duties, but a nagging feeling persists. One day, you hear about a data breach affecting the company. Users’ email addresses were leaked, leading to widespread panic among the user base. The company’s reputation takes a significant hit, and there are talks of legal action against the company for negligence. As the investigation unfolds, it becomes clear that the breach was due to the very flaw you discovered. You are now faced with the guilt and fear of potential repercussions. What do you do?`,
        options: [
          { answer: "Confront your guilt and attempt to rectify the situation by speaking up.", nextStep: 4 },
          { answer: "Remain silent and hope the investigation does not trace back to you.", nextStep: 5 }
        ]
      },
      {
        text: `You choose to report the vulnerability to your supervisor immediately. After reviewing your findings, your supervisor escalates the issue to the security team. The flaw is patched before it can be exploited, and users’ data is protected. However, your supervisor seems more concerned about the potential fallout than your quick thinking. They downplay the significance of your discovery and instruct you not to mention it to anyone else. Weeks later, during a company-wide meeting, the CTO praises the security team for their proactive measures in preventing a potential data breach, but your contribution is never acknowledged. Despite this, you feel a sense of pride knowing that you did the right thing. Do you:`,
        options: [
          { answer: "Confront your supervisor about the lack of recognition.", nextStep: 6 },
          { answer: "Let it go and focus on your work.", nextStep: 7 }
        ]
      },
      {
        text: `Feeling guilty, you decide to confess your knowledge of the flaw to the investigation team. Your confession surprises them, but they appreciate your honesty. The company takes your confession into account, leading to an internal review of the processes that allowed the vulnerability to go unnoticed. The investigation concludes with changes to the company’s code review policies, but your career prospects are marred by your initial decision to stay silent. You spend the next few months regaining your reputation within the company.`,
      },
      {
        text: `You choose to remain silent, hoping that the investigation does not trace back to you. The breach becomes a major scandal, with lawsuits and public outcry against the company. Eventually, the investigation uncovers your initial discovery of the flaw, leading to your dismissal from the company and potential legal consequences. Your decision to stay silent has led to personal and professional ruin.`,
      },
      {
        text: `Frustrated by the lack of recognition, you decide to confront your supervisor. They listen to your concerns but remain unmoved. They remind you that the company's priority is to maintain a strong public image, and sometimes that means not giving credit where it’s due. Feeling disillusioned, you begin to question whether this is the right company for you. However, your confrontation does lead to a change in your supervisor's attitude toward you. They start to involve you more in important projects, perhaps as a way to keep you placated. You decide to focus on building your career and proving your value, but a sense of dissatisfaction lingers.`,
      },
      {
        text: `You choose to let it go and focus on your work, believing that recognition isn’t as important as doing the right thing. Over time, you gain a reputation within the company as a reliable and ethical engineer. While you never receive direct recognition for discovering the vulnerability, your dedication to your work does not go unnoticed. Eventually, you are offered a promotion to a more senior role, where you have more influence over security decisions. Your journey has taught you that sometimes, the true reward for doing the right thing is knowing that you’ve made a difference, even if it’s behind the scenes.`,
      },
      {
        text: `In the end, your decision to handle the situation ethically protected the company from a potential disaster and upheld the privacy of its users. Your actions, though not publicly acknowledged, have had a lasting impact on the company’s culture and approach to security. The experience has shaped your perspective on the importance of ethics in technology, and you continue to champion user privacy and data security in all your projects.
  
        Questions:
        1. How should companies balance transparency with the need to maintain public confidence when addressing security vulnerabilities?
        2. What are the ethical implications of prioritizing public image over recognizing individual contributions in preventing data breaches?`
      }
    ]
  },  
  {
    id: 2,
    title: "Illicit Trade of Coltan in the Democratic Republic of Congo",
    steps: [
      {
        text: `The Democratic Republic of Congo (DRC) is home to some of the world’s most
        valuable natural resources, including coltan, a critical mineral for modern electronics
        such as smartphones, computers, and other digital devices. The demand for coltan has
        surged with the advent of 5G technology, making it an essential component for global
        industries. However, the extraction and trade of coltan in the DRC are fraught with
        ethical and legal challenges.

        As an official working for the Congolese Ministry of Mines, you are tasked with overseeing
        the mining operations in one of the most resource-rich regions of the country. Despite
        the potential for economic growth, you quickly discover that the majority of coltan mining
        operations in your region are controlled by non-state armed groups and are conducted
        illegally by artisanal miners without proper permits. The miners work under hazardous
        conditions, with little to no regard for environmental standards, and their activities have
        led to deforestation, pollution, and the destruction of wildlife habitats, including the
        critically endangered eastern lowland gorilla.

        In your investigations, you uncover a complex network of organized crime that facilitates
        the illegal trade of coltan. State officials, including some within your department, are
        involved in the smuggling operations. The coltan is sold to intermediaries who falsify
        documents to certify the mineral as conflict-free, which is then exported to countries like
        the United States, China, and South Korea, where it is used by major electronics companies.
        You realize that the corruption extends to the highest levels of government, making it
        difficult to take any direct action without putting your own safety at risk. Do you:`,
        options: [
          { answer: "Look the other way due to fear of reprisal.", nextStep: 2 },
          { answer: "Report the activity to your superiors.", nextStep: 3 }
        ]
      },
      {
        text: `After much deliberation, you decide to report the illegal activities to your
        superiors. However, your report is met with indifference, and you are warned not to
        pursue the matter further. It becomes clear that your superiors are complicit in the
        smuggling operations, and any further attempts to expose the corruption could lead
        to serious personal consequences, including threats to your life and the lives of your
        family members. You are faced with a difficult decision: Do you:`,
        options: [
          { answer: "Confront them directly and demand action.", nextStep: 4 },
          { answer: "Seek international support to expose the network.", nextStep: 5 }
        ]
      },
      {
        text: `You choose to confront your superiors directly, demanding that they take action
        to stop the illegal mining and smuggling operations. In response, you are immediately
        reassigned to a remote location with limited resources, effectively silencing your
        efforts to expose the corruption. The illegal activities continue unchecked, and the
        environmental destruction and human exploitation worsen. In your new position, you
        are powerless to make any significant impact, and your career prospects diminish.
        Ultimately, you are forced to leave the Ministry, disillusioned by the widespread
        corruption that pervades the system.`,
      },
      {
        text: `Realizing the dangers of confronting your superiors directly, you instead decide to
        seek international support. You reach out to international human rights organizations
        and the global media, providing them with detailed evidence of the illegal mining
        operations and the involvement of high-ranking government officials. Your efforts
        gain international attention, and there is growing pressure on the DRC government to
        address the issue.

        As a result of the international scrutiny, the government is forced to launch an
        investigation into the illegal activities. Several officials are arrested, and new regulations
        are implemented to increase transparency and accountability in the coltan supply chain.
        However, the reforms are met with resistance, and the situation remains volatile. While
        your actions have led to some positive changes, the deep-rooted corruption and the
        influence of organized crime continue to pose significant challenges.`,
      },
      {
        text: `The illicit trade of coltan in the DRC highlights the complex interplay between natural
        resource exploitation, organized crime, and global demand for technology. The challenges
        you faced in addressing the illegal mining and smuggling operations underscore the
        difficulties in achieving meaningful reform in a system plagued by corruption and violence.

        Despite the risks, your decision to seek international support has brought attention to
        the issue and sparked a global conversation about the ethical implications of the coltan
        trade. Your actions have laid the groundwork for future efforts to combat the illegal trade
        and protect the environment and human rights in the DRC. The journey ahead is long
        and fraught with challenges, but your efforts have shown that change is possible, even
        in the face of overwhelming odds.`,
      },
      {
        text: `Questions:
        1. What ethical considerations should be taken into account when dealing with situations involving organized crime and corruption in resource-rich countries?
        2. How can international cooperation be leveraged to address the challenges posed by the illegal trade of critical minerals like coltan?`
      }
    ]
  },
  {
    id: 3,
    title: "AI-Generated Art and Cultural Appropriation",
    steps: [
      {
        text: `In recent years, AI-generated art has become a topic of heated debate. 
        FN Meka, a virtual rapper powered by artificial intelligence, was signed and 
        then quickly dropped by a major record label amid accusations of perpetuating 
        harmful stereotypes and cultural appropriation. Critics argue that AI-created 
        characters like FN Meka exploit cultural elements without proper representation 
        or compensation to the communities whose culture is being appropriated.
  
        As a developer involved in a project to create AI-generated artists, you are tasked 
        with designing a new virtual character. The project is highly lucrative, and the 
        company is eager to launch it quickly. However, you are aware of the ethical 
        concerns surrounding AI-generated art, especially in terms of cultural 
        representation and appropriation. Do you:`,
        options: [
          { answer: "Proceed with the project, focusing on its technical innovation.", nextStep: 2 },
          { answer: "Voice your concerns and suggest involving a diverse team to ensure proper cultural representation.", nextStep: 3 }
        ]
      },
      {
        text: `You decide to proceed with the project, prioritizing its technical innovation. 
        The virtual artist you create quickly becomes popular, gaining millions of followers 
        on social media. However, soon after its launch, the character is criticized for 
        perpetuating stereotypes and cultural appropriation, leading to a public backlash. 
        The controversy causes significant damage to the company's reputation, and the 
        project is eventually shut down. You are left questioning the ethical implications 
        of your decision to prioritize innovation over cultural sensitivity.`,
      },
      {
        text: `You voice your concerns and suggest involving a diverse team to ensure proper 
        cultural representation. The company agrees, and the project is delayed to allow 
        for a more inclusive approach. When the virtual artist is finally launched, it receives 
        praise for its thoughtful representation and innovation. The project becomes a 
        success, and the character is celebrated for its unique blend of technology and 
        cultural authenticity. Your decision to prioritize ethical considerations over speed 
        and profitability helps create a more inclusive and respectful use of AI technology.`,
      },
      {
        text: `The rapid rise of AI-generated art, exemplified by virtual characters like FN Meka, 
        raises important ethical questions about cultural appropriation and representation. 
        As AI continues to play a larger role in the creation of art and entertainment, 
        it is crucial to consider who benefits from these technologies and at whose expense.
  
        Your experience highlights the importance of taking a thoughtful and inclusive 
        approach to the development of AI technologies. By involving diverse voices 
        and perspectives in the creation process, it is possible to harness the power of AI 
        in a way that respects and celebrates cultural diversity rather than exploiting it.`,
      },
      {
        text: `Questions:
        1. How can companies developing AI-generated art ensure that they respect and honor cultural diversity?
        2. What role should ethical considerations play in the development of AI technologies, especially when they intersect with art and culture?`
      }
    ]
  },
  {
    id: 4,
    title: "Addressing Harassment on Google Drive",
    steps: [
      {
        text: `As a leader at Google, you are made aware of an ongoing issue where Google Drive's sharing permissions have been exploited to harass users. Victims are being shared unwanted files by individuals they wish to avoid, and despite attempts to remove these files, they reappear due to the current design of Drive's sharing system. This issue has been raised in multiple complaints and highlighted in the media, drawing negative attention to Google. Users are frustrated that they cannot block individuals from sharing files with them, and they feel that Google is not doing enough to protect their privacy and security. You are now faced with a decision on how to address this problem while balancing user safety, company resources, and potential impacts on Drive's usability. Do you:`,
        options: [
          { answer: "Prioritize immediate user safety by implementing a block feature, even if it requires significant resources and delays other projects.", nextStep: 2 },
          { answer: "Focus on minimizing the issue by refining the existing 'report as abuse' feature, without committing to a full blocking feature, allowing resources to focus on new projects and profits.", nextStep: 3 }
        ]
      },
      {
        text: `You decide to prioritize user safety and commit resources to develop a comprehensive blocking feature for Google Drive. The project requires significant time and resources, leading to delays in other planned updates and new features. However, once implemented, users feel more secure and satisfied with Google's commitment to their safety. Google Drive's reputation improves as a safe platform for collaboration and sharing. In the long run, this decision fosters greater user trust and loyalty, though it comes at the cost of slower innovation and reduced profits in the short term.`,
      },
      {
        text: `You choose to refine the 'report as abuse' feature to address the issue without implementing a full blocking feature. This allows you to allocate resources towards other innovative projects and maintain the company's growth and profit margins. While the new reporting features offer some relief, many users still feel unprotected from harassment and express dissatisfaction with Google's response. The company faces ongoing criticism, but continues to push forward with new projects and profit-generating features. The decision reflects a balance between user safety and business priorities, though it may leave some users feeling neglected.`,
      },
      {
        text: `The scenario highlights the complex trade-offs between user safety, resource allocation, and business priorities in tech companies. As a leader, your decisions have far-reaching consequences on user trust, company reputation, and overall success. Balancing these factors is crucial in making informed and ethical decisions.
  
        Questions:
        1. How should tech companies balance user safety and privacy concerns with the need for innovation and profitability?
        2. What are the potential long-term consequences of prioritizing business growth over user trust in situations like this?`
      }
    ]
  }  
];

const CaseStudy = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [history, setHistory] = useState([]);

  const handleOptionClick = (nextStep) => {
    setHistory([...history, currentStep]);
    setCurrentStep(nextStep);
  };

  const handleBackClick = () => {
    if (history.length > 0) {
      const lastStep = history.pop();
      setHistory([...history]);
      setCurrentStep(lastStep);
    }
  };

  return (
    <div className="case-study-container">
      {selectedCase === null ? (
        <div>
          <h2>Select a Case Study</h2>
          {caseStudies.map((cs) => (
            <button key={cs.id} onClick={() => setSelectedCase(cs)} className="option-button">
              {cs.title}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>{selectedCase.title}</h2>
          <p>{selectedCase.steps[currentStep].text}</p>
          <div className="options-container">
            {selectedCase.steps[currentStep].options &&
              selectedCase.steps[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.nextStep)}
                  className="option-button"
                >
                  {option.answer}
                </button>
              ))}
          </div>
          
          {/* Render the Back button below options */}
          {history.length > 0 && (
            <button onClick={handleBackClick} className="option-button">
              Back
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseStudy;

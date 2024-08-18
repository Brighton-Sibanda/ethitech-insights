// ThoughtCorner.js
import React, { useState } from 'react';

const thoughts = [
  { question: "What is the role of ethics in technology?", answer: "Ethics guide the responsible development and use of technology, ensuring it benefits society." },
  { question: "How can technology professionals prevent racial bias in algorithms?", answer: "By diversifying teams and implementing rigorous bias testing protocols." },
  { question: "What would an ethical internet look like?", answer: "Using fictional science, there would be internet quiet hours. The internet sleeps as we do. This allows for pollution to be a thing of the past and electricity is reduced. Messages that are sent across the world would be sent but only received when the morning of that timezone has arrived. https://just-tech.ssrc.org/articles/an-ethical-internet/" },
  { question: "Ever thought about data capitalism?", answer: "Capitalism is when you give money and get goods and services in return. However, this is not always a fair exchange in reality. As a consumer, you give money to a big company. This money makes the company richer but you don’t see the workers get paid any higher. Now, data allows companies to obtain more information. Companies use this to see how much money to pay workers and how much to charge the consumer. Every time you interact with the internet, you are giving data to companies! https://datacapitalism.d4bl.org/#Chapter1-link" },
  { question: "Racial Algorithms?", answer: "Imagine constructing an algorithmically generated face from the DNA of an attacker at a crime scene. Well, this is exactly what the East Bay Parks Police District did. They then ran this ‘face’ against facial recognition to see if they could find the victim. Do you think this is a great idea? There are so many biases in detecting criminals and there are so many cases of arresting the wrong person. Would this only exacerbate that problem? https://www.wired.com/story/parabon-nanolabs-dna-face-models-police-facial-recognition/" },
  { question: "Race is a social construct?", answer: "Scientists argue that race is a social construct with no biological meaning. When comparing people from Europe and Africa, there is not an ‘absolute genetic difference’. Race is only a means to separate people and to fuel racist ideologies. From falsehoods of IQ to risks of disease, a group of scientists say this is the wrong way of researching things. That race should not be a basis for dividing groups of people. They suggest ancestry or population which closely reflects the relationship between genes and people. https://www.scientificamerican.com/article/race-is-a-social-construct-scientists-argue/" },
  { question: "Using AI in war?", answer: "Should it be right for a computer to decide the life of a human being? Well the IDF are doing this with ‘The Gospel’. This computer generates target recommendations to bomb. Using a large database built of suspected militants over the years, The Gospel provides a quick way to authorise such assassinations. In the past, Israel would produce 50 targets a year to now a hundred targets in a day. How accurate these targets are debatable, given the high percentage of civilian deaths. This begs the question, should it be right to trust AI when it comes to life or death? https://www.theguardian.com/world/2023/dec/01/the-gospel-how-israel-uses-ai-to-select-bombing-targets" },
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

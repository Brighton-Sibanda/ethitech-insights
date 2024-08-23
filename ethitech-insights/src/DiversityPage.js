import React, { useState } from 'react';

const DiversityPage = () => {
  const [selectedNarrative, setSelectedNarrative] = useState(null);

  const narratives = [
    {
      id: 2,
      name: "Maya Jackson",
      description: `Maya Jackson is a 16-year-old high school student passionate about technology and coding. As an African American girl, she has often navigated the challenges of being a minority in tech spaces. Her interests lie in understanding how technology can be used to create inclusive environments, especially for marginalized communities.`,
      scenario: `
        During a school project, Maya is assigned to explore the intersection of race and technology. She discovers that facial recognition technologies have historically struggled with accuracy when identifying darker skin tones, a problem that stems from a lack of diverse data in the training sets used to develop these systems. 
        Intrigued, Maya delves deeper into how these biases impact real-world applications, learning about cases where individuals were wrongfully accused of crimes due to misidentification by biased AI systems. Determined to make a difference, Maya develops a prototype that improves facial recognition accuracy for diverse skin tones by incorporating a more inclusive dataset. 
        Her project is a success, and she presents it at a school science fair, where it receives recognition for addressing a critical issue in AI technology. Maya’s journey emphasizes the need for inclusive tech development and inspires her to pursue a career where she can continue to work on technologies that serve all communities fairly.`
    },
    {
      id: 3,
      name: "James Thompson",
      description: `James Thompson is a 32-year-old African American software developer at a large tech company. Over the years, he has become increasingly aware of the systemic inequalities within the tech industry. James is particularly focused on how race and racism are perpetuated through technology, and he advocates for greater diversity and inclusion in tech development.`,
      scenario: `
        At his company, James is working on a project involving an AI-powered content management system. He notices that the system consistently tags images of people of color with their race, while images of white individuals are tagged by their professions or activities. Recognizing this as a form of implicit bias, James recalls instances where AI systems have been criticized for reinforcing stereotypes—such as algorithms that incorrectly identify Black individuals as criminals more frequently than their white counterparts.
        James decides to take action. He organizes a series of workshops to educate his colleagues about the sociohistorical roots of race and how these biases can permeate technology. He also works with his team to develop new tagging protocols that focus on activities and professions rather than race, ensuring the system treats all users equally.
        Through his efforts, James not only improves the accuracy and fairness of the AI system but also raises awareness within his company about the importance of diversity in tech development. His initiative helps his company avoid the pitfalls of biased technology, ultimately contributing to a more inclusive workplace culture.`
    },
    {
      id: 4,
      name: "Aiyana Whitefeather",
      description: `Aiyana Whitefeather is a 28-year-old Native American activist and tech enthusiast from the Lakota tribe. She is committed to preserving her culture and using technology to support indigenous communities. Aiyana is focused on the intersection of technology and settler colonialism, exploring how tech can be both a tool of oppression and a means of resistance.`,
      scenario: `
        Aiyana is deeply involved in advocating for indigenous rights and decides to explore how technology has been used historically to marginalize indigenous communities. She uncovers how modern digital platforms, like social media and mapping technologies, often erase indigenous land rights by not recognizing traditional territories. 
        Determined to counter this digital erasure, Aiyana develops a platform that allows indigenous communities to map their ancestral lands, share cultural stories, and document ongoing land disputes. She collaborates with tech experts to ensure the platform is accessible and secure, safeguarding sensitive information from misuse.
        Aiyana’s platform becomes a vital resource for indigenous communities across North America, empowering them to assert their land rights and cultural heritage. Her work draws attention to the ongoing impact of settler colonialism in the tech industry and inspires others to consider how technology can be harnessed for resistance and decolonization.`
    },
    {
      id: 5,
      name: "Carlos Rivera",
      description: `Carlos Rivera is a 25-year-old Latino entrepreneur from Los Angeles, California. He runs a startup that focuses on using AI to solve social problems. Carlos is passionate about ensuring that technology serves underrepresented communities, and he is aware of the challenges posed by cultural biases in AI development.`,
      scenario: `
        Carlos's startup is developing an AI-powered tool to help social services identify families in need of support. However, during testing, he realizes that the AI system is more likely to flag minority families for intervention based on biased historical data. This issue is similar to how predictive policing algorithms have been criticized for disproportionately targeting communities of color.
        Concerned that his tool could inadvertently reinforce systemic biases, Carlos takes a step back to reevaluate the data and algorithms his team is using. He implements stricter criteria for data inclusion, ensuring that the AI system considers a broader range of socioeconomic factors rather than relying on proxies that could reflect racial bias. 
        Carlos also collaborates with community organizations to gather input on how to make the tool more equitable and effective. As a result, the AI system becomes a more reliable and fair tool for social services, helping to support families without perpetuating existing inequalities. Carlos’s approach highlights the importance of diverse representation in AI development and the need for continuous evaluation of technology’s impact on marginalized communities.`
    }
  ];

  const handleSelectNarrative = (narrative) => {
    setSelectedNarrative(narrative);
  };

  const handleBackClick = () => {
    setSelectedNarrative(null);
  };

  return (
    <div className="container py-5">
      {selectedNarrative === null ? (
        <>
          <h2 className="mb-3">Diversity and Technology</h2>
          <p>This section explores personal stories and case studies that highlight the impact of technology on diverse communities. These narratives help illustrate the crucial need for inclusive practices in tech development and implementation. Click on their names to learn more!</p>
          
          {narratives.map((item) => (
            <div
              key={item.id}
              className="mb-4"
              style={{
                backgroundColor: 'green',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                color: 'white'
              }}
              onClick={() => handleSelectNarrative(item)}
            >
              <h3>Meet {item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>{selectedNarrative.name}</h2>
          <p>{selectedNarrative.scenario}</p>
          <button onClick={handleBackClick} className="option-button">Back</button>
        </>
      )}
    </div>
  );
};

export default DiversityPage;

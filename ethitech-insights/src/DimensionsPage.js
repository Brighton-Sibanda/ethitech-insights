//DimensionsPage.js
import React, { useState } from 'react';

const dimensions = [
  { 
    title: "Privacy", 
    description: "Exploring the significance of user privacy in technology. This includes understanding how personal information is collected, used, and protected by tech companies. For example, consider how social media platforms manage user data or the implications of surveillance technologies in public spaces."
  },
  { 
    title: "Data Security", 
    description: "Understanding the importance of securing user data against breaches. This involves practices and technologies that protect data from unauthorized access and cyber threats. An example is the use of encryption to secure user data transmitted over the Internet or implementing strict access controls within an organization."
  },
  { 
    title: "AI Ethics", 
    description: "Debating the moral implications of AI decisions and biases. This includes how algorithms can perpetuate biases or the ethical considerations in autonomous decision-making systems, such as self-driving cars and their decision protocols in accident scenarios."
  },
  { 
    title: "Racial Inequality in Tech", 
    description: "Addressing racial disparities in technology access and development. This concerns how technology may reinforce social biases and the underrepresentation of racial minorities in tech sectors. An example is bias in facial recognition technology that fails to accurately recognize faces from various racial backgrounds."
  }
];

const DimensionsPage = () => {
  const [selectedDimension, setSelectedDimension] = useState(null);

  const toggleDetail = index => {
    setSelectedDimension(selectedDimension === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-3">Dimensions of Ethics in Technology (click on an element to learn more)</h2>
      {dimensions.map((dimension, index) => (
        <div className={`card mb-3 ${selectedDimension === index ? 'active' : ''}`} key={index} onClick={() => toggleDetail(index)}>
          <div className="card-body">
            <h5 className="card-title">{dimension.title}</h5>
            {selectedDimension === index && <p className="card-text">{dimension.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DimensionsPage;


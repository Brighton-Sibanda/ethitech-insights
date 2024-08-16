//DimensionsPage.js
import React, { useState } from 'react';

const dimensions = [
  { title: "Privacy", description: "Exploring the significance of user privacy in technology." },
  { title: "Data Security", description: "Understanding the importance of securing user data against breaches." },
  { title: "AI Ethics", description: "Debating the moral implications of AI decisions and biases." },
  { title: "Racial Inequality in Tech", description: "Addressing racial disparities in technology access and development." },
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


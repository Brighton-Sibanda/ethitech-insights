// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const HomePage = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 text-center">Welcome to EthiTech Insights</h1>
      <p className="lead text-center mt-3">
        Ethics is not a set of fixed rules - Let's talk about it!
      </p>
      <div className="mt-4 text-center">
        {/* Update navigation using Link components for smoother SPA navigation */}
        <Link to="/defineethics" className="btn btn-info btn-red btn-lg m-2">What Is Ethics</Link>
        <Link to="/dimensions" className="btn btn-primary btn-lg m-2">Explore Ethics Dimensions</Link>
        <Link to="/quizzes" className="btn btn-secondary btn-lg m-2">Mini Ethics Quizzes</Link>
        <Link to="/thought-corner" className="btn btn-info btn-lg m-2">Thought Corner</Link>
        <Link to="/diversity" className="btn btn-warning btn-lg m-2">Diversity and Technology</Link>
        <Link to="/casestudies" className="btn btn-info btn-red btn-lg m-2">Case Studies</Link>
        <Link to="/simulator" className="btn btn-secondary btn-red btn-lg m-2">Decision Simulator</Link>
        <Link to="/about" className="btn btn-success btn-lg m-2">About Us</Link>
      </div>
    </div>
  );
};

export default HomePage;

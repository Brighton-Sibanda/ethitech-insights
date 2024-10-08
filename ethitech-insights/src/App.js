// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from './HomePage';
import QuizzesPage from './QuizzesPage';
import DimensionsPage from './DimensionsPage';
import AboutPage from './AboutPage';
import ThoughtCorner from './ThoughtCorner';
import DiversityPage from './DiversityPage';
import DefineEthics from './DefineEthics';
import CaseStudy from './CaseStudies';
import Simulator from './Simulator';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/dimensions" element={<DimensionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/thought-corner" element={<ThoughtCorner />} />
          <Route path="/diversity" element={<DiversityPage />} />
          <Route path="/defineethics" element={<DefineEthics />} />
          <Route path="/casestudies" element={<CaseStudy />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

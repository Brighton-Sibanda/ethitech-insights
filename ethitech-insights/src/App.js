// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import QuizzesPage from './QuizzesPage';
import DimensionsPage from './DimensionsPage';
import AboutPage from './AboutPage';
import ThoughtCorner from './ThoughtCorner';
import DiversityPage from './DiversityPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/dimensions" element={<DimensionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/thought-corner" element={<ThoughtCorner />} />
        <Route path="/diversity" element={<DiversityPage />} />
      </Routes>
    </Router>
  );
}

export default App;

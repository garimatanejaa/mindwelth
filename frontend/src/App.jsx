import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import { QuizList } from './pages/QuizList';
import { QuizPage } from './pages/QuizPage';
import { Resources } from './components/Resources';
import Notes from './pages/Notes';
import AboutUs from './pages/AboutUs';
import Therapist from './components/Therapist';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizzes" element={<QuizList />} /> 
          <Route path="/quiz/:quizId" element={<QuizPage />} /> 
          <Route path="/resources" element={<Resources />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/therapist" element={<Therapist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

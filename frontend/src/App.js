import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PetDetailsPage from './pages/PetDetailsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        {isLoggedIn && <Navbar user={currentUser} onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/pet/:id" element={isLoggedIn ? <PetDetailsPage /> : <Navigate to="/login" />} />
            <Route path="/feedback" element={isLoggedIn ? <FeedbackPage /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
          </Routes>
        </main>
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;

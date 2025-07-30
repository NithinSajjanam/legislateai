import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`font-gemini min-h-screen bg-white ${darkMode ? 'dark bg-black text-white' : 'text-black'} transition-all`}>
        <Navbar />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen font-sans antialiased transition-colors duration-500">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chatPage" element={<ChatPage />} />
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default AppRoutes;

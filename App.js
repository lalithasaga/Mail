import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import { AuthContextProvider } from './components/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
      
          </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App; 


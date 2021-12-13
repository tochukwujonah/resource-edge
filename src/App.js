import React from 'react'

import './App.css';
import AuthPage from './pages/authentication';
import ResetPasswordPage from './pages/authentication/reset-password';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';

const App = ()=> {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard/:user" element={<Dashboard />} />
          
        </Routes>

      </Router>


      
    </div>
  );
}

export default App;

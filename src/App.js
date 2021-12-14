import React from 'react'

import './App.css';
import AuthPage from './pages/authentication';
import ResetPasswordPage from './pages/authentication/reset-password';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import SignUp from './pages/authentication/sign-up';

const App = ()=> {
  return (
    <div className="App">
            {/* Designs */}


            {/* Logistics section bar designs */}
            {/* <div className="design design-left"></div>
            <div className="design design-right"></div> */}


            {/* Finance section bar designs bar */}
            {/* <div className="design design-left finance-design-left"></div>
            <div className="design design-right finance-design-right"></div> */}

      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard/:user" element={<Dashboard />} />
          
        </Routes>

      </Router>


      
    </div>
  );
}

export default App;

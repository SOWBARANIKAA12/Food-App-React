import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import LandingPage from './LandingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // This function handles general navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // ***** NEW: This function will be called on successful login *****
  // It specifically navigates the user back to the landing page.
  const handleLoginSuccess = () => {
    navigateTo('landing');
  };

  let content;
  if (currentPage === 'login') {
    // ***** UPDATE: Pass the new function as a prop to LoginPage *****
    content = <LoginPage onSwitch={() => navigateTo('register')} onLoginSuccess={handleLoginSuccess} />;
  } else if (currentPage === 'register') {
    // For now, the register page can also navigate to landing after success.
    // You could create a separate handleRegisterSuccess if needed.
    content = <RegisterPage onSwitch={() => navigateTo('login')} onRegisterSuccess={handleLoginSuccess} />;
  } else {
    content = <LandingPage onNavigate={navigateTo} />;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
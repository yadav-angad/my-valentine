import React from 'react';
import '../styles/WelcomeCard.css';

const WelcomeCard = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-content">
          <div className="welcome-hearts-top">💕</div>
          <h1 className="welcome-title">Ready to play, My Love?</h1>
          <p className="welcome-subtitle">
            Answer 5 questions correctly and prove your love! 
          </p>
          <div className="welcome-hearts-bottom">💕💕💕</div>
          <button 
            className="start-button"
            onClick={onStart}
          >
            ✨ Start ✨
          </button>
          <p className="welcome-hint">
            Click to begin the ultimate Valentine's quiz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;

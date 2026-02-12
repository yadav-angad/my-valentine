import React from 'react';
import '../styles/FinalScreen.css';

const FinalScreen = () => {
  return (
    <div className="final-screen">
      <div className="celebration-container">
        <div className="hearts">❤️</div>
        <h1 className="final-message">You Said Yes! 💕</h1>
        <p className="celebration-text">You've completed the quiz and agreed to be my Valentine!</p>
        <div className="celebration-emoji">
          🎉 💑 🌹 💒 ✨
        </div>
        <button 
          className="restart-button"
          onClick={() => window.location.reload()}
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;

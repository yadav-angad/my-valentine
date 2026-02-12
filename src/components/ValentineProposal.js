import React, { useState } from 'react';
import '../styles/ValentineProposal.css';

const ValentineProposal = ({ onConfirm }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfirm = () => {
    setShowConfetti(true);
    setTimeout(onConfirm, 1500);
  };

  return (
    <div className="proposal-overlay">
      <div className={`proposal-popup ${showConfetti ? 'confetti-active' : ''}`}>
        <div className="proposal-content">
          <div className="proposal-hearts">💕</div>
          <h1 className="proposal-question">Sadhana, will you be my Valentine?</h1>
          <p className="proposal-message">
            You've answered all my questions correctly and proven you deserve my heart! 
            Thank you for saying YES! ✨
          </p>
          <div className="proposal-emojis">
            🌹 💐 💕 💍 ✨ 💑
          </div>
          <button 
            className="proposal-button"
            onClick={handleConfirm}
          >
            Continue to Celebration 🎉
          </button>
        </div>

        {showConfetti && (
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: Math.random() * 100 + '%',
                  delay: Math.random() * 0.5 + 's',
                  duration: Math.random() * 2 + 2 + 's'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentineProposal;

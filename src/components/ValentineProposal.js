import React, { useEffect } from 'react';
import '../styles/ValentineProposal.css';

const ValentineProposal = ({ onConfirm }) => {
  useEffect(() => {
    // Confetti plays for 4 seconds then move to final screen
    const timer = setTimeout(onConfirm, 4000);
    return () => clearTimeout(timer);
  }, [onConfirm]);

  return (
    <div className="proposal-overlay">
      <div className="proposal-popup">
        <div className="proposal-content">
          <div className="proposal-hearts">💕</div>
          <h1 className="proposal-question">Sadhana, Thank you for being my Valentine!</h1>
          <p className="proposal-message">
            You've answered all my questions correctly and proven you deserve my heart! 
            Thank you for saying YES! ✨
          </p>
          <div className="proposal-emojis">
            🌹 💐 💕 💍 ✨ 💑
          </div>
        </div>

        <div className="confetti-container">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: Math.random() * 100 + '%',
                '--delay': Math.random() * 0.5 + 's',
                '--duration': Math.random() * 2 + 2 + 's'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValentineProposal;

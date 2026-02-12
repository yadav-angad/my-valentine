import React, { useState, useEffect } from 'react';
import '../styles/FinalScreen.css';

const FinalScreen = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Confetti will show for 4 seconds
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="final-screen">
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(100)].map((_, i) => (
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
      )}
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

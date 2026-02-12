import React, { useState, useRef, useEffect } from 'react';
import '../styles/AnswerButton.css';

const AnswerButton = ({ option, onSelect, isValentineQuestion, isNoButton }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const getRandomPosition = () => {
    const randomX = (Math.random() - 0.5) * 800;
    const randomY = (Math.random() - 0.5) * 600;
    return { x: randomX, y: randomY };
  };

  useEffect(() => {
    if (!isNoButton) return;

    const handleGlobalMouseMove = (e) => {
      const mouseX = e.detail.x;
      const mouseY = e.detail.y;

      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      // Calculate distance from mouse to button center
      const distX = buttonCenterX - mouseX;
      const distY = buttonCenterY - mouseY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // If mouse is getting close to button, make it run away
      if (distance < 200) {
        const angle = Math.atan2(distY, distX);
        const runDistance = Math.max(200 - distance, 50);
        
        const newX = Math.cos(angle) * runDistance * 3;
        const newY = Math.sin(angle) * runDistance * 3;

        setOffset({ x: newX, y: newY });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('globalMouseMove', handleGlobalMouseMove);
    return () => window.removeEventListener('globalMouseMove', handleGlobalMouseMove);
  }, [isNoButton]);

  const handleMouseDown = (e) => {
    if (!isNoButton) return;
    
    // Prevent default behavior
    e.preventDefault();
    e.stopPropagation();
    
    // Make button flee to random position
    const newPos = getRandomPosition();
    setOffset(newPos);
  };

  const handleClick = (e) => {
    if (isNoButton) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onSelect(option);
  };

  return (
    <button
      ref={buttonRef}
      className={`answer-button ${isNoButton ? 'disabled-button runaway-button' : ''} ${isValentineQuestion ? 'valentine-button' : ''}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      disabled={isNoButton}
      style={isNoButton ? { transform: `translate(${offset.x}px, ${offset.y}px)` } : {}}
    >
      {option}
    </button>
  );
};

export default AnswerButton;

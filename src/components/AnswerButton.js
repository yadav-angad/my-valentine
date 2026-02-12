import React from 'react';
import '../styles/AnswerButton.css';

const AnswerButton = ({ option, onSelect, isValentineQuestion, isNoButton }) => {
  const handleClick = () => {
    if (isNoButton) {
      // For Valentine question, "No" button is disabled
      return;
    }
    onSelect(option);
  };

  return (
    <button
      className={`answer-button ${isNoButton ? 'disabled-button' : ''} ${isValentineQuestion ? 'valentine-button' : ''}`}
      onClick={handleClick}
      disabled={isNoButton}
    >
      {option}
    </button>
  );
};

export default AnswerButton;

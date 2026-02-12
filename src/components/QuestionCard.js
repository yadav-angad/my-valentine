import React from 'react';
import '../styles/QuestionCard.css';
import AnswerButton from './AnswerButton';

const QuestionCard = ({ question, onAnswerSelect, showWrongAnswer, isValentineQuestion }) => {
  return (
    <div className={`question-card ${isValentineQuestion ? 'valentine-card' : ''}`}>
      <div className="card-content">
        <h2 className="question-text">{question.question}</h2>

        {showWrongAnswer && (
          <div className="wrong-answer-message">
            ❌ Wrong Answer! Try again...
          </div>
        )}

        <div className="options-container">
          {question.options.map((option, index) => (
            <AnswerButton
              key={index}
              option={option}
              onSelect={onAnswerSelect}
              isValentineQuestion={isValentineQuestion}
              isNoButton={isValentineQuestion && option === "No"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

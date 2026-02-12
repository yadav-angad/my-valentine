import React, { useState } from 'react';
import '../styles/QuizContainer.css';
import QuestionCard from './QuestionCard';
import FinalScreen from './FinalScreen';
import ValentineProposal from './ValentineProposal';

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [showProposal, setShowProposal] = useState(false);

  const questions = [
    {
      id: 1,
      question: "When did we talked first time?",
      options: ["10th June 2017", "11th June 2017", "13th June 2017"],
      correctAnswer: "10th June 2017"
    },
    {
      id: 2,
      question: "What is my favorite drink?",
      options: ["Water", "Chai", "Coffee"],
      correctAnswer: "Chai"
    },
    {
      id: 3,
      question: "What was the first gift I gave you?",
      options: ["Teady bear", "Watch", "Earrings"],
      correctAnswer: "Teady bear"
    },
    {
      id: 4,
      question: "What was our common point of discussion at first?",
      options: ["Airplane travel", "Train travel", "Bike Travel"],
      correctAnswer: "Train travel"
    },
    {
      id: 5,
      question: "Will you be my Valentine?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      isValentineQuestion: true
    }
  ];

  const handleAnswerSelect = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    if (!isCorrect) {
      setShowWrongAnswer(true);
      return;
    }

    // Correct answer
    setShowWrongAnswer(false);

    if (currentQuestion === questions.length - 1) {
      // Last question answered correctly - show proposal
      setShowProposal(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (showProposal) {
    return (
      <ValentineProposal 
        onConfirm={() => setCurrentQuestion(questions.length)}
      />
    );
  }

  if (currentQuestion === questions.length) {
    return <FinalScreen />;
  }

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <div className="progress-text">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <QuestionCard 
        question={questions[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
        showWrongAnswer={showWrongAnswer}
        isValentineQuestion={questions[currentQuestion].isValentineQuestion}
      />
    </div>
  );
};

export default QuizContainer;

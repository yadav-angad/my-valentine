# Be My Valentine - Quiz App

A fun, interactive React quiz app with a Valentine's Day twist! Answer 5 questions correctly and finish with a romantic proposal question.

## Features

- 5 interactive question cards
- Progress bar showing quiz completion
- Wrong answer feedback with option to retry
- Special Valentine's question on the final question where "No" is disabled
- Beautiful gradient UI with animations
- Celebration screen upon successful completion

## Installation

1. Navigate to the project directory:
```bash
cd my-valentine
```

2. Install dependencies:
```bash
yarn install
```

## Running the App

Start the development server:
```bash
yarn start
```

The app will open in your browser at `http://localhost:3000`

## How It Works

1. Start the quiz with question 1
2. Select the correct answer to move to the next question
3. If you select the wrong answer, you'll see an error message and must try again
4. On question 5 (the Valentine question), the "No" button is disabled
5. Select "Yes" to complete the quiz and see the celebration screen
6. Click "Take Quiz Again" to restart

## Project Structure

```
my-valentine/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── QuizContainer.js
│   │   ├── QuestionCard.js
│   │   ├── AnswerButton.js
│   │   └── FinalScreen.js
│   ├── styles/
│   │   ├── QuizContainer.css
│   │   ├── QuestionCard.css
│   │   ├── AnswerButton.css
│   │   └── FinalScreen.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React 18
- CSS3 with animations and gradients
- React Hooks (useState)

Enjoy the quiz! 💕

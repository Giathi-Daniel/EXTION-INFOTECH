import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export function AppState({ children }) {
  const [quizzes, setQuizzes] = useState([
    { title: 'Quiz 1', questions: [{ question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' }] },
    { title: 'Quiz 2', questions: [{ question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome'], answer: 'Paris' }] },
  ]);

  const [currentQuiz, setCurrentQuiz] = useState(null);

  return (
    <AppStateContext.Provider value={{ quizzes, setQuizzes, currentQuiz, setCurrentQuiz }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}

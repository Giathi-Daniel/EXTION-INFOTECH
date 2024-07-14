import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Quiz = () => {
  const questions = [
    { question: 'What is 1+1?', options: ['3', '4', '2'], answer: '2' },
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome'], answer: 'Paris' }
  ];

  return (
    <Box>
      {questions.map((q, index) => (
        <Box key={index} mb={2}>
          <Typography variant="h6">{q.question}</Typography>
          {q.options.map((option, idx) => (
            <Button key={idx} variant="outlined" sx={{ marginRight: 1 }}>
              {option}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Quiz;

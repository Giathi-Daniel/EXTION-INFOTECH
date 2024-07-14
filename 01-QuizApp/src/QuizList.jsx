import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

const QuizList = () => {
  const quizzes = ['Quiz 1', 'Quiz 2', 'Quiz 3']

  return (
    <List>
        {quizzes.map((quiz, index) => {
            <ListItem button key={index}>
                <ListItemText primary={quiz} />
            </ListItem>
        } )}
    </List>
  )
}

export default QuizList
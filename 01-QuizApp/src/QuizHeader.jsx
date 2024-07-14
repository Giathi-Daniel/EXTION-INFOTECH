import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const QuizHeader = () => {
  return (
    <AppBar>
        <Toolbar>
            <Typography variant="h6" component="div">
                Quiz App
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default QuizHeader
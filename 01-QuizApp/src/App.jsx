import { Box, CssBaseline } from '@mui/material';

import { AppState } from './providers/AppState';
import { QuizList } from './QuizList';
import { QuizHeader } from './QuizHeader';
import { Quiz } from './Quiz';

function App() {

  return (
    <AppState>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <QuizHeader />
        <QuizList />
        <Quiz />
      </Box>
    </AppState>
  )
}

export default App

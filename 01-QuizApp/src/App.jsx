import { Box, CssBaseline } from '@mui/material';

import { AppState } from '../providers/AppState.jsx';
import { QuizList } from './QuizList.jsx';
import { QuizHeader } from './QuizHeader.jsx';
import { Quiz } from './Quiz.jsx';

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

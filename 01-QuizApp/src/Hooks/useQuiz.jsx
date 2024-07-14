import { useAppState } from '../providers/AppState.jsx';

export function useQuiz() {
    const { currentQuiz, setCurrentQuiz } = useAppState()

    function selectQuiz(quiz) {
        setCurrentQuiz(quiz)
    }

    return {currentQuiz, selectQuiz}
}
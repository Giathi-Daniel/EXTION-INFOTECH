import { useAppState } from '../providers/AppState.jsx';

export function useQuizzes() {
    const { quizzes, setQuizzes } = useAppState()

    function addQuiz(quiz) {
        setQuizzes([...quizzes, quiz])
    }

    return {quizzes, addQuiz}
}
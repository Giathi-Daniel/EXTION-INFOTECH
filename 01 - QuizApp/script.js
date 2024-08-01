const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const timerElement = document.getElementById('time');
const feedbackElement = document.getElementById('feedback');

let shuffledQuestions, currentQuestionIndex, score, timeLeft, timerInterval;

async function fetchQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=15&type=multiple');
        const data = await response.json();
        return data.results.map(question => {
            const formattedQuestion = {
                question: question.question,
                type: 'multiple-choice',
                answers: question.incorrect_answers.map(answer => ({ text: answer, correct: false }))
            };
            formattedQuestion.answers.push({ text: question.correct_answer, correct: true });
            formattedQuestion.answers = formattedQuestion.answers.sort(() => Math.random() - 0.5);
            return formattedQuestion;
        });
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}

async function startQuiz() {
    score = 0;
    shuffledQuestions = await fetchQuestions();
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    scoreContainer.classList.add('hide');
    nextButton.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    startTimer();
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    feedbackElement.classList.add('hide');
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, question));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearInterval(timerInterval);
    timerElement.innerText = 30;
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(selectedButton, question) {
    const correct = selectedButton.innerText === question.answers.find(a => a.correct).text;
    showFeedback(correct, correct ? 'Correct!' : 'Incorrect.');
    if (correct) {
        score++;
    }
    clearInterval(timerInterval);
    nextButton.classList.remove('hide');
}

function showFeedback(correct, feedback) {
    feedbackElement.classList.remove('hide');
    feedbackElement.innerText = feedback;
    feedbackElement.classList.add(correct ? 'correct' : 'wrong');
}

function startTimer() {
    timeLeft = 30;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (shuffledQuestions.length > currentQuestionIndex) {
        setNextQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainerElement.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreElement.innerText = `Your score: ${score}`;
    
    const messageElement = document.createElement('div');
    if (score >= 7) {
        messageElement.innerHTML = `<span>🎉 Congratulations! You did great!</span>`;
    } else {
        messageElement.innerHTML = `<span>😞 Better luck next time. Try again!</span>`;
    }
    
    scoreContainer.appendChild(messageElement);
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', startQuiz);

startQuiz();

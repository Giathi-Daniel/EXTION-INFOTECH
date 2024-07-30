document.addEventListener('DOMContentLoaded', function () {
    let currentQuestionIndex = 0;
    let questions = [];
    const quizContainer = document.getElementById('quiz');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const submitButton = document.getElementById('submit');

    function fetchQuestions() {
        fetch('/api/questions')
            .then(response => response.json())
            .then(data => {
                questions = data;
                showQuestion(currentQuestionIndex);
            });
    }

    function showQuestion(index) {
        quizContainer.innerHTML = '';
        const question = questions[index];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        questionDiv.innerHTML = `
            ${question.image ? `<img src="${question.image}" alt="Question Image">` : ''}
            <p>${question.text}</p>
            ${question.choices.map((choice, i) => `
                <div>
                    <input type="radio" id="choice${i}" name="choice" value="${choice}">
                    <label for="choice${i}">${choice}</label>
                </div>
            `).join('')}
        `;

        quizContainer.appendChild(questionDiv);
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
        submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
    }

    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });

    submitButton.addEventListener('click', () => {
        const answers = [];
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="choice"]:checked`);
            answers.push({
                questionId: question.id,
                selectedAnswer: selectedOption ? selectedOption.value : null
            });
        });

        fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answers })
        })
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('quizResults', JSON.stringify(result));
                window.location.href = 'review.html';
            });
    });

    fetchQuestions();
});

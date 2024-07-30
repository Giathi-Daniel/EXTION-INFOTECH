document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/questions')
        .then(response => response.json())
        .then(data => {
            const quizContainer = document.getElementById('quiz');
            data.questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');
                questionDiv.innerHTML = `
                    <img src="${q.image}" alt="Question Image">
                    <h3>${q.question}</h3>
                    <label><input type="radio" name="q${q.id}" value="A"> ${q.option_a}</label><br>
                    <label><input type="radio" name="q${q.id}" value="B"> ${q.option_b}</label><br>
                    <label><input type="radio" name="q${q.id}" value="C"> ${q.option_c}</label><br>
                    <label><input type="radio" name="q${q.id}" value="D"> ${q.option_d}</label>
                `;
                quizContainer.appendChild(questionDiv);
            });
        })
        .catch(error => console.error('Error fetching questions:', error));

    document.getElementById('submit').addEventListener('click', () => {
        const answers = {};
        document.querySelectorAll('.question').forEach((questionDiv, index) => {
            const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                const questionId = data.questions[index].id;
                answers[questionId] = selectedOption.value;
            }
        });

        fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers })
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('quizResults', JSON.stringify(data.results));
            window.location.href = 'review.html';
        })
        .catch(error => console.error('Error submitting answers:', error));
    });
});

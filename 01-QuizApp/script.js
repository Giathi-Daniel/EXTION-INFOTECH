document.addEventListener('DOMContentLoaded', function () {
    fetch('/questions')
        .then(response => response.json())
        .then(data => {
            const quizContainer = document.getElementById('quiz');
            data.questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');
                questionDiv.innerHTML = `
                    <h3>${q.question}</h3>
                    <label><input type="radio" name="q${index}" value="A"> ${q.option_a}</label><br>
                    <label><input type="radio" name="q${index}" value="B"> ${q.option_b}</label><br>
                    <label><input type="radio" name="q${index}" value="C"> ${q.option_c}</label><br>
                    <label><input type="radio" name="q${index}" value="D"> ${q.option_d}</label>
                `;
                quizContainer.appendChild(questionDiv);
            });
        })
        .catch(error => console.error('Error fetching questions:', error));
});

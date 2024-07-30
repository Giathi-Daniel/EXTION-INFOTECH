document.addEventListener('DOMContentLoaded', function () {
    const results = JSON.parse(localStorage.getItem('quizResults'));
    const reviewContainer = document.getElementById('review');

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.innerHTML = `
            <h3>Question ID: ${result.questionId}</h3>
            <p>${result.correct ? 'Correct' : `Wrong. Correct Answer: ${result.correctAnswer}`}</p>
        `;
        reviewContainer.appendChild(resultDiv);
    });

    document.getElementById('try-again').addEventListener('click', () => {
        localStorage.removeItem('quizResults'); 
        window.location.href = 'index.html'; 
    });
});

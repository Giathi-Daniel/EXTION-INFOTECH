const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(express.static('public'));
app.use(bodyParser.json());

// Setup database
db.serialize(() => {
    db.run("CREATE TABLE questions (id INT, text TEXT, image TEXT, choices TEXT, answer TEXT)");

    const stmt = db.prepare("INSERT INTO questions VALUES (?, ?, ?, ?, ?)");
    stmt.run(1, 'What is the capital of France?', null, JSON.stringify(['Paris', 'London', 'Berlin', 'Madrid']), 'Paris');
    stmt.run(2, 'What is 2 + 2?', null, JSON.stringify(['3', '4', '5', '6']), '4');
    stmt.finalize();
});

// Fetch questions
app.get('/api/questions', (req, res) => {
    db.all("SELECT * FROM questions", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows.map(row => ({
            id: row.id,
            text: row.text,
            image: row.image,
            choices: JSON.parse(row.choices)
        })));
    });
});

// Submit answers
app.post('/api/submit', (req, res) => {
    const { answers } = req.body;
    const results = answers.map(answer => {
        const correctAnswer = db.prepare("SELECT answer FROM questions WHERE id = ?");
        correctAnswer.get(answer.questionId, (err, row) => {
            if (err) {
                return { questionId: answer.questionId, correct: false, correctAnswer: null };
            }
            return {
                questionId: answer.questionId,
                correct: row.answer === answer.selectedAnswer,
                correctAnswer: row.answer
            };
        });
    });
    res.json(results);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

const db = new sqlite3.Database('quiz.db');

app.use(express.json());
app.use(express.static('public'));

app.get('/api/questions', (req, res) => {
  db.all("SELECT id, image, question, option_a, option_b, option_c, option_d FROM questions", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ questions: rows });
  });
});

app.post('/api/submit', (req, res) => {
  const userAnswers = req.body.answers;
  db.all("SELECT id, correct_option FROM questions", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    const results = rows.map(row => {
      return {
        questionId: row.id,
        correct: userAnswers[row.id] === row.correct_option,
        correctAnswer: row.correct_option
      };
    });

    res.json({ results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

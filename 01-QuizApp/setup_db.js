const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('quiz.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_option TEXT NOT NULL
  )`);

  const stmt = db.prepare("INSERT INTO questions (question, option_a, option_b, option_c, option_d, correct_option) VALUES (?, ?, ?, ?, ?, ?)");

  stmt.run('What is the capital of France?', 'Berlin', 'Madrid', 'Paris', 'Rome', 'C');
  stmt.run('Which planet is known as the Red Planet?', 'Earth', 'Jupiter', 'Mars', 'Venus', 'C');
  stmt.run('What is the largest ocean on Earth?', 'Atlantic', 'Indian', 'Arctic', 'Pacific', 'D');

  stmt.finalize();
});

db.close();

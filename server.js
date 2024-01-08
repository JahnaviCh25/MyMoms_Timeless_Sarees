const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database setup
const dbPath = path.join(__dirname, 'newsletterDB.db');
const db = new sqlite3.Database(dbPath);

// Serve index.html directly
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/subscribe', (req, res) => {
    const { name, email } = req.body;

    console.log('Received subscription data:', { name, email });

    const sql = 'INSERT INTO subscriptions (name, email) VALUES (?, ?)';

    db.run(sql, [name, email], (err) => {
        if (err) {
            console.error('Error saving subscription to SQLite:', err);
            res.status(500).send('Error saving subscription');
        } else {
            console.log('Subscription saved successfully');
            res.status(200).send('Subscription saved successfully');
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

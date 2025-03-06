const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { initDb} = require('./models/connect');

app.use('/', require('./routes'));
app.use(express.json());
app.use(cors());

// Serve the frontend folder
app.use(express.static(path.join(__dirname, './cse341-ww-student-code/frontend')));

const port = 8080;

initDb((err, db) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './cse341-ww-student-code/frontend/index.html'));
});


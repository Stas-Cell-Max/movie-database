const express = require('express');
const mysql = require('mysql2');

// Initialize the Express application
const app = express();
app.use(express.json());

// Set up the connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'movie_db'
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// Set up the server to listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



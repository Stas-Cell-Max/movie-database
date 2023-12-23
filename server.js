const express = require('express');
const mysql = require('mysql2');

// Initialize the Express application
const app = express();
app.use(express.json());

// Set up the connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BootCamp2023',
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

//GET request /api/movies route to retrieve all movies from the 'movies' table.
app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {     
      if (err) throw err;
      res.json(results);
    });
  });

//GET request /api/movie-reviews route to retrieve all reviews and their associated movie names
app.get('/api/movie-reviews', (req, res) => {
    const query = `
    SELECT movies.name, reviews.review_text, reviews.rating
    FROM reviews
    JOIN movies ON reviews.movie_id = movies.id`;
  
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

// POST request /api/add-movie route to add a new movie to the 'movies' table
  app.post('/api/add-movie', (req, res) => {
    const { name, genre, release_year } = req.body;
    const query = 'INSERT INTO movies (name, genre, release_year) VALUES (?, ?, ?)';
  
    db.query(query, [name, genre, release_year], (err) => {
      if (err) throw err;
      res.send('Movie added successfully!');
    });
  });

//PUT request /api/review/:id route to update a review in the 'reviews' table based on the provided ID.
  app.put('/api/review/:id', (req, res) => {
    const { review_text, rating } = req.body;
    const query = 'UPDATE reviews SET review_text = ?, rating = ? WHERE id = ?';
  
    db.query(query, [review_text, rating, req.params.id], (err) => {
      if (err) throw err;
      res.send('Review updated successfully!');
    });
  });

//DELETE request /api/movie/:id route to delete a movie from the 'movies' table based on the provided ID.
app.delete('/api/movie/:id', (req, res) => {
    const query = 'DELETE FROM movies WHERE id = ?';
  
    db.query(query, [req.params.id], (err) => {
        if (err) throw err; 
        res.send('Movie deleted successfully!'); 
    });
});


  



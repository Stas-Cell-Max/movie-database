
# Module 12 Mini-Project: Movie Database

In this mini-project, you will build Rest API routes for creating, retrieving, and deleting movies from a MySQL database.

## User Stories

* As a user, I want to create a new database.

* As a user, I want to store movie names and reviews in the database in two separate table.

* As a user, I want to see a list of all movies.

* As a user, I want to be able to create and delete a movie.

* As a user, I want to return a list of all the reviews and the associated movie name.

## Acceptance Criteria

* It's done when `movie_db` is created and contains a `movies` and `reviews` table.

* It's done when `movie_db` has been seeded with data.

* It's done when a `GET` request to the `/api/movies` route renders a list of all movies.

* It's done when a `GET` request to the `/api/movie-reviews` route renders a list of all reviews with movie data.

* It's done when a `POST` request to the `/api/add-movie` route successfully adds a movie when tested using Insomnia.

* It's done when a `PUT` request to the `/api/review/:id` route successfully updates a movie review when tested using Insomnia.

* It's done when a `DELETE` request to `/api/movie/:id` route deletes a route when tested using Insomnia.

---

## Assets

Design the following database schema that contains two tables:

![The database schema includes a movies table and a reviews table, linked by the movie id.](./assets/image_1.png)

---

## Notes

To test your routes you will use Insomnia. If you have not already downloaded it, you will need to visit the [Insomnia download page](https://insomnia.rest/download) and do so.

Refer to the documentation:

[Insomnia documentation on getting started](https://support.insomnia.rest/category/152-using-insomnia)

[Express.js documentation on routing](https://expressjs.com/en/guide/routing.html)

[MySQL documentation on joins](https://dev.mysql.com/doc/refman/8.0/en/join.html)

[npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)

## 💡 Hints

How can you link your `movies` and `reviews` tables?

How can you execute a query in an Express.js server using the npm `MySQL2` package?



##  Project Outline

## Project Setup

1. Initialize Project:

- Create a new directory for your project (e.g., movie-database).
- Initialize a new Node.js project within this directory by running npm init -y.
- Install necessary packages: express for your server and mysql2 for interacting with the MySQL database.

2. Setup Express Server:

- Create an index.js file where you'll set up your Express server.
- Require and configure Express, and set it to listen on an appropriate port.

3. Database Connection:

- Set up a connection to your MySQL server using mysql2.
- Ensure you have MySQL server running and accessible.

## Database Design and Creation

1. Create movie_db Database:

- Use MySQL Workbench or the MySQL Shell to create a new database called movie_db.

2. Create Tables:

- Within movie_db, create two tables: movies and reviews.
- movies might include columns like id, name, and genre.
- reviews might include id, movie_id (as a foreign key to movies), review_text, and rating.

3. Seed Data:

-Insert some initial data into your movies and reviews tables for testing.

## API Development

1. REST API Routes:

Create the following routes in your Express application:
- GET /api/movies: Fetches and returns a list of all movies.
- GET /api/movie-reviews: Fetches and returns a list of all reviews with associated movie data (use a JOIN query).
- POST /api/add-movie: Adds a new movie to the movies table.
- PUT /api/review/:id: Updates a review in the reviews table based on the provided ID.
- DELETE /api/movie/:id: Deletes a movie from the movies table based on the provided ID.

2. Implementing the Routes:

- Use async/await for handling asynchronous database queries.
- Ensure proper error handling in each route.

## Testing

1.  Insomnia:
- Install and set up Insomnia to test your API routes.
- Test each route to ensure they work as expected according to the acceptance criteria.

## Documentation and Final Checks

1. Code Comments and README:

- Document your code and create a README.md file explaining how to set up and use your API.

2.  Review Project:

- Double-check all user stories and acceptance criteria to ensure everything is complete.
- Additional Enhancements (Optional)
- Implement additional features like search functionality, user authentication, or more complex database queries.
- Consider adding a frontend to consume your API.
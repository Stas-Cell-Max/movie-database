const express = require('express');
const mysql = require('mysql2');

// Create a Connection
const connection = mysql.createConnection({
    host: 'localhost',     // or the IP address of MySQL server
    user: 'root',  //  MySQL username, often 'root'
    password: 'BootCamp2023', //  MySQL password
    database: 'movie_db'   // the name of the database that has to connect to
  });

  //Connect to the Database
  connection.connect(error => {
    if (error) {
      console.error('Error connecting: ' + error.stack);
      return;
    }
    console.log('Connected as ID ' + connection.threadId);
  });

  // Use the Connection
  connection.query('SELECT * FROM my_table_name', (error, results, fields) => {
    if (error) throw error;
    console.log(results); // results contains rows returned by the server
  });
  
  // Close the connection when done
  connection.end();

//Handling Asynchronous Operations
const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({/* ... */});
  const [rows, fields] = await connection.execute('SELECT * FROM your_table_name');
  console.log(rows);
}

main();


  
  
  
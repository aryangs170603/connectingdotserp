const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection Pool Configuration
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Function to handle MySQL queries
function queryDatabase(query, params = []) {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

// Test Route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Route to fetch users
app.get('/api/users', async (req, res, next) => {
  console.log('Received request for /api/users'); // Debug log
  try {
    const users = await queryDatabase('SELECT * FROM users');
    res.status(200).json(users);
  } catch (err) {
    console.error('Database fetch error:', err);
    next(err);
  }
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

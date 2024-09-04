const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection Configuration
const dbConfig = {
  host: '185.224.138.70',
  port: 3306,
  user: 'u842806892_connectingdots',
  password: '@Connecting123',
  database: 'u842806892_connectingdots'
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
    } else {
      console.log('Database connected successfully!');
    }
  });

  connection.on('error', err => {
    console.error('MySQL error occurred:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
      console.log('A fatal error occurred. Reconnecting...');
      handleDisconnect(); // Reconnect on connection loss
    } else {
      throw err; // Throw other types of errors
    }
  });
}

handleDisconnect();

// Route to check database connection
app.get('/api/check-connection', (req, res) => {
  connection.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send('Database connection failed');
    }
    res.status(200).send('Database connection successful');
  });
});

// Start the server
app.listen(5001, () => {
  console.log(`Server running on http://localhost:${port}`);
});

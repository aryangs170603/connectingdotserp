const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for all origins (You can specify allowed origins if needed)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle API routes
app.post('/register', (req, res) => {
  const { name, mobile, email, courseName } = req.body;

  // Here you would typically handle form submission logic, like saving to a database
  console.log('Form Data Received:', { name, mobile, email, courseName });

  // Send a success response
  res.status(200).json({ message: 'Registration complete!' });
});

// All other routes should serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

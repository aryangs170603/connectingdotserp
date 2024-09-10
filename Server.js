const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://qhvpqmhj-3000.inc1.devtunnels.ms'],  // Add your DevTunnels URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json()); // To parse incoming JSON request bodies

// MongoDB connection
mongoose.connect("mongodb+srv://connectingerp1:connecting@connectingcluster.6ifho.mongodb.net/dataconnecting", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB:", err);
});

// Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  coursename: String,
  createdAt: { type: Date, default: Date.now }  // Automatically set timestamp
});


const User = mongoose.model("User", userSchema);

// API route to handle form submissions
app.post("/api/submit", async (req, res) => {
  const { name, email, contact, coursename } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      contact,
      coursename
    });

    await newUser.save(); // Save to MongoDB
    console.log("User saved to database:", newUser);  // Log success
    
    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user data" });
  }
});

// API route to fetch all users (leads)
app.get("/api/leads", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ message: "Error fetching leads" });
  }
});

// Start the server
app.listen(5001, '0.0.0.0', () => {
  console.log("Server is running on port 5001");
});

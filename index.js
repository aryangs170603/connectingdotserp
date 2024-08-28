const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mongoose connection string
mongoose.connect('mongodb+srv://connectingerp1:<db_password>@lead.bg1cu.mongodb.net/?retryWrites=true&w=majority&appName=Lead', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error', err));

// Lead schema and model
const leadSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  courseName: String,
  email: String,
  date: { type: Date, default: Date.now },
});

const Lead = mongoose.model('Lead', leadSchema);

// API to submit leads
app.post('/api/leads', async (req, res) => {
  const lead = new Lead(req.body);
  try {
    await lead.save();
    res.status(201).send(lead);
  } catch (error) {
    res.status(400).send(error);
  }
});

// API to fetch all leads for the dashboard
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find({});
    res.send(leads);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

console.log('Connecting to MongoDB...');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB - db.once');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

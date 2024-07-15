// backend/routes/user.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// POST API for User Registration
router.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  const newUser = new User({
    username,
    email,
    password,
    activeStatus: true,
    lastSeen: new Date()
  });

  try {
    await newUser.save();
    res.status(201).json({ username: newUser.username });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).send('Username or email already exists');
    }
    console.error(error); // Log any other errors
    res.status(400).send('Error registering user');
  }
  
});

module.exports = router;

// backend/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    activeStatus: { type: Boolean, default: true },
    lastSeen: { type: Date, default: Date.now },
    profilePhotoUrl: { type: String }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;

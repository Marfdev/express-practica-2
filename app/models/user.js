const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Role = require('./role');

const userSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  username: String,
  password: String,
  roleName: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
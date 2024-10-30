const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const roleSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: String,
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
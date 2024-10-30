const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Role = require('../models/role');
const secret = require('../config/auth.config');

async function signup(req, res) {
  const { username, password, roleName } = req.body;

  try {
    // Check if the role exists
    const role = await Role.findOne({ name: roleName });
    
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with the associated role
    const newUser = await User.create({ username, password: hashedPassword, role: role._id , roleName: role.name});

    console.log('User created:', newUser);
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ username });

  if (user) {
    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Generate JWT
      const token = jwt.sign({ username: user.username, userId: user.id, role: user.roleName }, secret.secret, {
        expiresIn: '1h', // Token expires in 1 hour
      });

      res.json({ token });
    } else {
      res.status(401).json({ error: 'Incorrect password' });
    }
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}

module.exports = { signup, login };
const Role = require('../models/role');

async function createRole(req, res) {
    const { name } = req.body;
  
    try {
      const newRole = await Role.create({ name });
  
      console.log('Role created:', newRole);
      res.json({ message: 'Role created successfully' });
    } catch (error) {
      console.error('Error creating role:', error);
      res.status(500).json({ error: 'Error creating role' });
    }
  }

module.exports = { createRole };
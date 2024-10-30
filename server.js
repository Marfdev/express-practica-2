const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./app/routes/authRoutes');
const dashboardRoutes = require('./app/routes/dashboardRoutes');
const roleController = require('./app/controllers/roleController');
const testRoutes = require('./app/routes/testRoutes');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ROUTES 
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes );
app.use('/' , dashboardRoutes);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// create the roles in MongoDB
const Role = require('./app/models/role');

const roles = ['user', 'admin', 'mod'];
roles.forEach(async (role)  => {
  let isRoleCreated = await Role.findOne({ name: role })
  if (!isRoleCreated) {
    roleController.createRole({ body: { name: role } }, { json: () => {} });
  } else {
    console.log(`The role ${role} already exists`);
  }
});


const express = require('express');
const authController = require('../controllers/authController');
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleWare');

const router = express.Router();

// Routes related to authentication
router.post('/signup', authController.signup);
router.post('/login', authController.login);


module.exports = router;
const express = require('express');
const authMiddleware = require('../middleware/authMiddleWare');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('public/html/home.html', { root: __dirname + '/../../' });
});
  router.get('/signin', (req, res) => {
    res.sendFile('public/html/entry.html', { root: __dirname + '/../../' });
});

router.get('/user', (req, res) => {
    res.sendFile('public/html/user.html', { root: __dirname + '/../../' });
});

router.get('/mod', (req, res) => {
    res.sendFile('public/html/mod.html', { root: __dirname + '/../../' });
});

router.get('/admin', (req, res) => {
    res.sendFile('public/html/admin.html', { root: __dirname + '/../../' });
});

module.exports = router;
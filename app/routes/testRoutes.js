const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleWare');
const controller = require("../controllers/userController");
const router = express.Router();


  router.get("/all", controller.allAccess);

  router.get(
    "/user",
    authMiddleware.authenticateToken,
    (req,res,next) => {
        req.user = jwt.decode(req.headers.authorization);
        if(req.user && req.user.role === "user" || req.user && req.user.role === "mod" || req.user && req.user.role === "admin"){
            next()
        }else res.status(401).json({ error: 'Unauthorized' });
    },
    controller.userBoard
    
  );

  router.get(
    "/mod",
    (req,res,next) => {
        req.user = jwt.decode(req.headers.authorization);
        if(req.user && req.user.role === "mod" || req.user && req.user.role === "admin"){
            next()
        }else res.status(403).json({ error: 'Forbidden' });
    },
    controller.moderatorBoard
  );

  router.get(
    "/admin",
    (req,res,next) => {
        req.user = jwt.decode(req.headers.authorization);
        if(req.user && req.user.role === "admin"){
            next()
        }else res.status(403).json({ error: 'Forbidden' });
    },
    controller.adminBoard
  );
module.exports = router;
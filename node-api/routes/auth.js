var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');
var users = new usersModel();

router.post('/', function (req, res, next) {
  users.getUserByUsername(req.body.username).then(user => {
    if (user && users.comparePasswords(user.password, req.body.password)) {
      const token = users.generateJWT(user.id);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Wrong username or password' });
    }
  })
});

module.exports = router;

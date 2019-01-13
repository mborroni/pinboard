var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');
var users = new usersModel();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function (req, res, next) {
  const user = await users.getUserByUsername(req.body.username);

  if (user) {
    return res.status(401).json({ error: 'Username already taken' });
  }

  users.newUser(req.body).then(data => {
    if (data.insertId) {
      const token = users.generateJWT(data.insertId);
      return res.status(200).json({ token });
    }

    return res.status(400).json({ error: 'Invalid register parameters' });
  });
});

module.exports = router;

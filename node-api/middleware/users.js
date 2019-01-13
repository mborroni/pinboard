var usersModel = require('../models/usersModel');
var users = new usersModel();

function load(req, res, next) {
  users.getUserById(req.user.id).then((user) => {
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user;
    delete req.user.password;
    return next();
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

module.exports = load;
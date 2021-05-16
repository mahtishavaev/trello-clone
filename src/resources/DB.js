const User = require('./users/user.model');

const DB = {
  users: [],
};

DB.users.push(new User(), new User(), new User());

module.exports = DB;

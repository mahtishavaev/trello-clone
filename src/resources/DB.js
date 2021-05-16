const Board = require('./boards/board.model');
const User = require('./users/user.model');

const DB = {
  users: [],
  boards: [],
};

DB.users.push(new User(), new User(), new User());

DB.boards.push(new Board({ title: 'Board 1' }));

module.exports = DB;

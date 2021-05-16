const Column = require('./columns/column.model');
const User = require('./users/user.model');

const DB = {
  users: [],
  columns: [],
};

DB.users.push(new User(), new User(), new User());

DB.columns.push(
  new Column({ title: 'To Do', order: 1 }),
  new Column({ title: 'Doing', order: 2 }),
  new Column({ title: 'Done', order: 3 })
);

module.exports = DB;

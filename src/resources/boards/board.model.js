const { v4: uuid } = require('uuid');
const Column = require('../columns/column.model');

class Board {
  constructor({
    id = uuid(),
    title = 'No Title',
    columns = [
      new Column({ title: 'To Do', order: 1 }),
      new Column({ title: 'Doing', order: 2 }),
      new Column({ title: 'Done', order: 3 }),
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;

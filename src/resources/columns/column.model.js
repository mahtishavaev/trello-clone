const { v4: uuid } = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'No title', order = null } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;

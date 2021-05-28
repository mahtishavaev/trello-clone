import { v4 as uuid } from 'uuid';

export class Column {
  id: string;

  title: string;

  order: number | null;

  constructor({ id = uuid(), title = 'No title', order = 1 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

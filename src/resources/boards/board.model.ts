import { v4 as uuid } from 'uuid';
import { Column } from '../columns/column.model';

export class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({
    id = uuid(),
    title = 'No Title',
    columns = [new Column({ title: 'To Do', order: 1 })],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

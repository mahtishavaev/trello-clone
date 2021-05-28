import { v4 as uuid } from 'uuid';

export class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  constructor({
    id = uuid(),
    title = 'No Title',
    order = 0,
    description = 'No Description',
    userId = null,
    boardId = null,
    columnId = null,
  }: Task) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

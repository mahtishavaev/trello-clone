import { Board } from './boards/board.model';
import { Task } from './tasks/task.model';
import { User } from './users/user.model';

interface IDB {
  users: User[];
  boards: Board[];
  tasks: Task[];
}

export const DB: IDB = {
  users: [],
  boards: [],
  tasks: [],
};

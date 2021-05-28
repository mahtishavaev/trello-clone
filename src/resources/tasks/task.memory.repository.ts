import { DB } from '../DB';
import { Task } from './task.model';

const getAll = async (boardId: string) =>
  DB.tasks.filter((el) => el.boardId === boardId);

const getById = async (id: string) => DB.tasks.filter((el) => el.id === id)[0];

const create = async (boardId: string, task: Task) => {
  const newTask = new Task({ ...task, boardId });
  DB.tasks.push(newTask);
  return newTask;
};

const update = async (id: string, task: Task) => {
  let updatedTask;
  DB.tasks = DB.tasks.map((el) => {
    if (el.id === id) {
      updatedTask = { ...task, id };
      return updatedTask;
    }
    return el;
  });
  return updatedTask;
};

const remove = async (id: string) => {
  DB.tasks = DB.tasks.filter((el) => el.id !== id);
};

const removeByBoardId = (id: string) => {
  DB.tasks = DB.tasks.filter((el) => el.boardId !== id);
};

const unassignUser = async (userId: string) => {
  DB.tasks = DB.tasks.map((el) => {
    if (el.userId === userId) {
      return { ...el, userId: null };
    }
    return el;
  });
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  unassignUser,
  removeByBoardId,
};

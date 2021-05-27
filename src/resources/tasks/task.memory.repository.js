const DB = require('../DB');
const Task = require('./task.model');

const getAll = async (boardId) =>
  DB.tasks.filter((el) => el.boardId === boardId);

const getById = async (id) => DB.tasks.filter((el) => el.id === id)[0];

const create = async (boardId, task) => {
  const newTask = new Task({ ...task, boardId });
  DB.tasks.push(newTask);
  return newTask;
};

const update = async (id, task) => {
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

const remove = async (id) => {
  DB.tasks = DB.tasks.filter((el) => el.id !== id);
};

const removeByBoardId = (id) => {
  DB.tasks = DB.tasks.filter((el) => el.boardId !== id);
};

const unassignUser = async (userId) => {
  DB.tasks = DB.tasks.map((el) => {
    if (el.userId === userId) {
      return { ...el, userId: null };
    }
    return el;
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  unassignUser,
  removeByBoardId,
};

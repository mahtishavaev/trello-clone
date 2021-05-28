const DB = require('../DB');
const Task = require('./task.model');

/** @module Task_repository */

/**
 * Returns all tasks on selected board
 * @param {string} boardId Board's id
 * @returns {Promise<Task[]>} Array of Tasks
 */
const getAll = async (boardId) =>
  DB.tasks.filter((el) => el.boardId === boardId);

/**
 * Returns the task by id
 * @param {string} id Task's id
 * @returns {Promise<Task>} Task
 */
const getById = async (id) => DB.tasks.filter((el) => el.id === id)[0];

/**
 * Creates a new task on selected board and returns it
 * @param {string} boardId Board's id
 * @param {Task} task A Task to create
 * @returns {Promise<Task>} Created Task
 */
const create = async (boardId, task) => {
  const newTask = new Task({ ...task, boardId });
  DB.tasks.push(newTask);
  return newTask;
};

/**
 * Updates the task by id and returns it
 * @param {string} id Task's id
 * @param {Task} task Task to update
 * @returns {Promise<Task>} Updated task
 */
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

/**
 * Removes the task by id
 * @param {string} id Task's id
 * @returns {void}
 */
const remove = async (id) => {
  DB.tasks = DB.tasks.filter((el) => el.id !== id);
};

/**
 * Removes all tasks on selected board
 * @param {string} id Board's id
 * @returns {void}
 */
const removeByBoardId = (id) => {
  DB.tasks = DB.tasks.filter((el) => el.boardId !== id);
};

/**
 * Unassigns all user's tasks
 * @param {string} userId User's id
 * @returns {void}
 */
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

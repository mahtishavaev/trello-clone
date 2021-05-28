const usersRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

/** @module User_service */

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (user) => usersRepo.create(user);

const update = (id, user) => usersRepo.update(id, user);

/**
 * Removes a user and unassigns his tasks
 * @param {string} id User's id
 * @returns {Promise<void>}
 */
const remove = async (id) => {
  await usersRepo.remove(id);
  await taskRepo.unassignUser(id);
};

module.exports = { getAll, getById, create, update, remove };

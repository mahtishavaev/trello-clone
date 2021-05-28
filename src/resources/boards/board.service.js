const boardsRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

/** @module Board_service */

const getAll = () => boardsRepo.getAll();

const getById = (id) => boardsRepo.getById(id);

const create = (board) => boardsRepo.create(board);

const update = (id, board) => boardsRepo.update(id, board);

/**
 * Removes the board and all its tasks by board id
 * @param {string} id Board's id
 * @returns {void}
 */
const remove = async (id) => {
  await boardsRepo.remove(id);
  await taskRepo.removeByBoardId(id);
};

module.exports = { getAll, getById, create, update, remove };

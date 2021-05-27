const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getById = (id) => tasksRepo.getById(id);

const create = (boardId, task) => tasksRepo.create(boardId, task);

const update = (id, task) => tasksRepo.update(id, task);

const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };

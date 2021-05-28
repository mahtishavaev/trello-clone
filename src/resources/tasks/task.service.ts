import { Task } from './task.model';
import tasksRepo from './task.memory.repository';

const getAll = (boardId: string) => tasksRepo.getAll(boardId);

const getById = (id: string) => tasksRepo.getById(id);

const create = (boardId: string, task: Task) => tasksRepo.create(boardId, task);

const update = (id: string, task: Task) => tasksRepo.update(id, task);

const remove = (id: string) => tasksRepo.remove(id);

export default { getAll, getById, create, update, remove };

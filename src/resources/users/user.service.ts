import { User } from './user.model';
import usersRepo from './user.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';

const getAll = () => usersRepo.getAll();

const getById = (id: string) => usersRepo.getById(id);

const create = (user: User) => usersRepo.create(user);

const update = (id: string, user: User) => usersRepo.update(id, user);

const remove = async (id: string) => {
  await usersRepo.remove(id);
  await tasksRepo.unassignUser(id);
};

export default { getAll, getById, create, update, remove };

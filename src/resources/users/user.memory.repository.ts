import { DB } from '../DB';
import { User } from './user.model';

const getAll = async () => DB.users;

const getById = async (id: string) => DB.users.filter((el) => el.id === id)[0];

const create = async (user: User) => {
  const newUser = new User(user);
  DB.users.push(newUser);
  return newUser;
};

const update = async (id: string, user: User) => {
  let updatedUser;
  DB.users = DB.users.map((el) => {
    if (el.id === id) {
      updatedUser = { ...user, id };
      return updatedUser;
    }
    return el;
  });
  return updatedUser;
};

const remove = async (id: string) => {
  DB.users = DB.users.filter((el) => el.id !== id);
};

export default { getAll, getById, create, update, remove };

const DB = require('../DB');
const User = require('./user.model');

const getAll = async () => DB.users;

const getById = async (id) => DB.users.filter((el) => el.id === id)[0];

const create = async (user) => {
  const newUser = new User(user);
  DB.users.push(newUser);
  return newUser;
};

const update = async (id, user) => {
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

const remove = async (id) => {
  DB.users = DB.users.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };

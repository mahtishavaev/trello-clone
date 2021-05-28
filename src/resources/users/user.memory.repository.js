const DB = require('../DB');
const User = require('./user.model');

/** @module User_repository */

/**
 * Returns all users
 * @returns {Promse<User[]>} Array of Users
 */
const getAll = async () => DB.users;

/**
 * Returns a user by id
 * @param {string} id User's id
 * @returns {Promise<User>} Found user
 */
const getById = async (id) => DB.users.filter((el) => el.id === id)[0];

/**
 * Creates a new user and returns him
 * @param {User} user User to create
 * @returns {Promise<User>} Created user
 */
const create = async (user) => {
  const newUser = new User(user);
  DB.users.push(newUser);
  return newUser;
};

/**
 * Updates a user by his id and returns him
 * @param {string} id User's id
 * @param {User} user User to update
 * @returns {Promise<User>} Updated user
 */
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

/**
 * Removes a user by his id
 * @param {string}  id User's id
 * @returns {void}
 */
const remove = async (id) => {
  DB.users = DB.users.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };

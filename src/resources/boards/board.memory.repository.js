const DB = require('../DB');
const Board = require('./board.model');

/** @module Board_repository */

/**
 * Returns all boards
 * @returns {Promise<Board[]>} Array of Boards
 */
const getAll = async () => DB.boards;

/**
 * Returns a board by id
 * @param {string} id Board's id
 * @returns {Promise<Board>}
 */
const getById = async (id) => DB.boards.filter((el) => el.id === id)[0];

/**
 * Creates a new board and returns it
 * @param {Board} board A board to create
 * @returns {Promise<Board>} Created board
 */
const create = async (board) => {
  const newBoard = new Board(board);
  DB.boards.push(newBoard);
  return newBoard;
};

/**
 * Updates the board by id
 * @param {strind} id Board's id
 * @param {Board} board Board to update
 * @returns {Promise<Board>} Updated board
 */
const update = async (id, board) => {
  let updatedBoard;
  DB.boards = DB.boards.map((el) => {
    if (el.id === id) {
      updatedBoard = { ...board, id };
      return updatedBoard;
    }
    return el;
  });
  return updatedBoard;
};

/**
 * Removes the board by id
 * @param {string} id Board's id
 * @returns {void}
 */
const remove = async (id) => {
  DB.boards = DB.boards.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };

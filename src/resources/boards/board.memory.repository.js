const DB = require('../DB');
const Board = require('./board.model');

const getAll = async () => DB.boards;

const getById = async (id) => DB.boards.filter((el) => el.id === id)[0];

const create = async (board) => {
  const newBoard = new Board(board);
  DB.boards.push(newBoard);
  return newBoard;
};

const update = async (id, board) => {
  let updatedBoard;
  DB.boards = DB.boards.map((el) => {
    if (el.id === id) {
      updatedBoard = { id, ...board };
      return board;
    }
    return el;
  });
  return updatedBoard;
};

const remove = async (id) => {
  DB.boards = DB.boards.filter((el) => el.id !== id);
  DB.tasks = DB.tasks.filter((el) => el.boardId !== id);
};

module.exports = { getAll, getById, create, update, remove };

import { DB } from '../DB';
import { Board } from './board.model';

const getAll = async () => DB.boards;

const getById = async (id: string) => DB.boards.filter((el) => el.id === id)[0];

const create = async (board: Board) => {
  const newBoard = new Board(board);
  DB.boards.push(newBoard);
  return newBoard;
};

const update = async (id: string, board: Board) => {
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

const remove = async (id: string) => {
  DB.boards = DB.boards.filter((el) => el.id !== id);
};

export default { getAll, getById, create, update, remove };

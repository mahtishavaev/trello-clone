import boardsRepo from './board.memory.repository';
import tasksRepo from '../tasks/task.memory.repository';
import { Board } from './board.model';

const getAll = () => boardsRepo.getAll();

const getById = (id: string) => boardsRepo.getById(id);

const create = (board: Board) => boardsRepo.create(board);

const update = (id: string, board: Board) => boardsRepo.update(id, board);

const remove = async (id: string) => {
  await boardsRepo.remove(id);
  await tasksRepo.removeByBoardId(id);
};

export default { getAll, getById, create, update, remove };

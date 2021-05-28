import { Router } from 'express';
import boardsService from '../boards/board.service';

const router = Router();

router.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getById(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: "Board doesn't exist " });
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.update(id, req.body);
  res.status(200).json(board);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await boardsService.remove(id);
  res.status(200).json({ message: 'Board has been deleted' });
});

export default router;

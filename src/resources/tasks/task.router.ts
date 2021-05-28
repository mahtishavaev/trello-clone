import { Request, Router } from 'express';
import tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId!);
  return res.status(200).json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.getById(id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task doesn't exist " });
  }
});

router.route('/').post(async (req: Request, res) => {
  const { boardId } = req.params;
  const task = await tasksService.create(boardId!, req.body);
  res.status(201).json(task);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.update(id, req.body);
  res.status(200).json(task);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await tasksService.remove(id);
  res.status(200).json({ message: 'Task has been deleted' });
});

export default router;

import { Router } from 'express';
import usersService from './user.service';
import { User } from './user.model';

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.update(id, req.body);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await usersService.remove(id);
  res.status(200).json({ message: 'User has been deleted' });
});

export default router;

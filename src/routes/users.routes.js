const { Router } = require('express');
const UsersService = require('../services/users.service');
const { SUCCESS_STATUS } = require('../constants');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await UsersService.getAll();
    res.status(SUCCESS_STATUS).json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await UsersService.getOne(id);
    res.status(SUCCESS_STATUS).json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const newData = { ...req.body };
  try {
    const newUser = await UsersService.create(newData);
    res.status(SUCCESS_STATUS).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const updatedUser = await UsersService.update(id, newData);
    res.status(SUCCESS_STATUS).json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedUser = await UsersService.delete(id);
    res.status(SUCCESS_STATUS).json(deletedUser);
  } catch (err) {
    next(err);
  }
}); // for admin

module.exports = router;

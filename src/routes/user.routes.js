const { Router } = require('express');
const UserService = require('../services/user.service');
const userValidator = require('../validators/user.validator');
const { SUCCESS_STATUS } = require('../constants');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await UserService.getAll();
    res.status(SUCCESS_STATUS).json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await UserService.getOne(id);
    res.status(SUCCESS_STATUS).json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const newData = { ...req.body };
  try {
    userValidator(newData);
    const newUser = await UserService.create(newData);
    res.status(SUCCESS_STATUS).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const newData = { ...req.body };
  try {
    userValidator(newData);
    const updatedUser = await UserService.update(id, newData);
    res.status(SUCCESS_STATUS).json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedUser = await UserService.delete(id);
    res.status(SUCCESS_STATUS).json(deletedUser);
  } catch (err) {
    next(err);
  }
}); // for admin

module.exports = router;

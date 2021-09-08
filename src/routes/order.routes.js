const { Router } = require('express');
const OrderService = require('../services/order.service');
const orderValidator = require('../validators/order.validator');
const { SUCCESS_STATUS } = require('../constants');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const orders = await OrderService.getAll();
    res.status(SUCCESS_STATUS).json(orders);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const order = await OrderService.getOne(id);
    res.status(SUCCESS_STATUS).json(order);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const newData = { ...req.body };
  try {
    orderValidator(newData);
    const newOrder = await OrderService.createOrder(newData);
    res.status(SUCCESS_STATUS).json(newOrder);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const newData = { ...req.body };
  try {
    orderValidator(newData);
    const updatedOrder = await OrderService.update(id, newData);
    res.status(SUCCESS_STATUS).json(updatedOrder);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedOrder = await OrderService.delete(id);
    res.status(SUCCESS_STATUS).json(deletedOrder);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

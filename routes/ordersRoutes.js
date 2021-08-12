const { Router } = require('express');
const OrdersService = require('../services/OrdersService');

const router = Router();
const SUCCESS = 200;
const NOT_FOUND = 404;

router.get('/', async (req, res, next) => {
  try {
    const orders = await OrdersService.getAll();
    res.status(SUCCESS).json(orders);
  } catch (err) {
    res.status(NOT_FOUND).json({ error: true, message: err.message });
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const order = await OrdersService.getOne(id);
    res.status(SUCCESS).json(order);
  } catch (err) {
    res.status(NOT_FOUND).json({ error: true, message: err.message });
  }
});

router.post('/', async (req, res, next) => {
  const newData = { ...req.body };
  try {
    const newOrder = await OrdersService.create(newData);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(NOT_FOUND).json({ error: true, message: err.message });
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const updatedOrder = await OrdersService.update(id, newData);
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(NOT_FOUND).json({ error: true, message: err.message });
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedOrder = await OrdersService.delete(id);
    res.status(200).json(deletedOrder);
  } catch (err) {
    res.status(NOT_FOUND).json({ error: true, message: err.message });
  }
});

module.exports = router;

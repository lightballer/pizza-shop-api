const Router = require('express');
const PizzaService = require('../services/pizza.service');
const pizzaValidation = require('../middlewares/pizza-validation.middleware');
const { SUCCESS_STATUS } = require('../constants');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const pizzas = await PizzaService.getAll();
    res.status(SUCCESS_STATUS).json(pizzas);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const pizza = await PizzaService.getOne(id);
    res.status(SUCCESS_STATUS).json(pizza);
  } catch (err) {
    next(err);
  }
});

router.post('/', pizzaValidation, async (req, res, next) => {
  const newData = { ...req.body };
  try {
    const validationError = res.locals.err;
    if (validationError) throw validationError;
    const newPizza = await PizzaService.create(newData);
    res.status(SUCCESS_STATUS).json(newPizza);
  } catch (err) {
    next(err);
  }
}); // for admin

router.put('/:id', pizzaValidation, async (req, res, next) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const updatedPizza = await PizzaService.update(id, newData);
    res.status(SUCCESS_STATUS).json(updatedPizza);
  } catch (err) {
    next(err);
  }
}); // for admin

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedPizza = await PizzaService.delete(id);
    res.status(SUCCESS_STATUS).json(deletedPizza);
  } catch (err) {
    next(err);
  }
}); // for admin

module.exports = router;

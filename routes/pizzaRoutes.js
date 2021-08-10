const Router = require('express');
const PizzaService = require('../services/PizzaService');

const router = Router();
const SUCCESS = 200;
const NOT_FOUND = 404;

router.get('/', async (req, res, next) => {
	try {
		const pizzas = await PizzaService.getAll();
		res.status(SUCCESS).json(pizzas);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
});

router.get('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const pizza = await PizzaService.getOne(id);
		res.status(SUCCESS).json(pizza);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
});

router.post('/', async (req, res, next) => {
	const newData = { ...req.body };
	try {
		const newPizza = await PizzaService.create(newData);
		res.status(SUCCESS).json(newPizza);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
}); // for admin

router.put('/:id', async (req, res, next) => {
	const id = req.params.id;
	const newData = req.body;
	try {
		const updatedPizza = await PizzaService.update(id, newData);
		res.status(SUCCESS).json(updatedPizza);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
}); // for admin

router.delete('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const deletedPizza = await PizzaService.delete(id);
		res.status(SUCCESS).json(deletedPizza);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
}); // for admin

module.exports = router;

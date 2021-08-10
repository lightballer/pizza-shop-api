const { Router } = require('express');
const UsersService = require('../services/UsersService');

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const users = await UsersService.getAll();
		res.status(SUCCESS).json(users);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
});

router.get('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const user = await UsersService.getOne(id);
		res.status(SUCCESS).json(pizza);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
});

router.post('/', async (req, res, next) => {
	const newData = { ...req.body };
	try {
		const newUser = await UsersService.create(newData);
		res.status(SUCCESS).json(newUser);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
});

router.put('/:id', async (req, res, next) => {
	const id = req.params.id;
	const newData = req.body;
	try {
		const updatedUser = await UsersService.update(id, newData);
		res.status(SUCCESS).json(updatedUser);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
});

router.delete('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const deletedUser = await UsersService.delete(id);
		res.status(SUCCESS).json(deletedUser);
	} catch (err) {
		res.status(NOT_FOUND).json({ error: true, message: err.message });
	}
}); // for admin

module.exports = router;

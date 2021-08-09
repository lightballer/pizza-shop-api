const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
	const userId = req.query.userId;
	let result = `get all orders`;
	if (userId) result = `get orders by userId ${req.query.userId}`;
	res.send(result);

	// const { id, userId } = req.query;
	// let result = `get all orders`;
	// if (id) result = `get order by id ${req.params.id}`;
	// if (userId) result = `get all orders from user ${userId}`;
	// res.send(result);
});

// router.get('/:id', (req, res, next) => {
//   res.send(`get order by id ${req.params.id}`);
// });

router.post('/', (req, res, next) => {
	res.send(`create new order`);
});

router.put('/:id', (req, res, next) => {
	res.send(`update new order by id ${req.params.id}`);
});

router.delete('/:id', (req, res, next) => {
	res.send(`delete order by id ${req.params.id}`);
});

module.exports = router;

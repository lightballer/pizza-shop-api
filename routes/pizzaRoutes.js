const Router = require('express');

const router = Router();

router.get('/', (req, res, next) => {
	res.send('get all pizzas');
});

router.get('/:id', (req, res, next) => {
	res.send(`get one pizza by id ${req.params.id}`);
});

router.post('/', (req, res, next) => {
	console.log(req.body);
	res.send('post one pizza');
}); // for admin

router.put('/:id', (req, res, next) => {
	res.send(`update pizza data by id ${req.params.id}`);
}); // for admin

router.delete('/:id', (req, res, next) => {
	res.send(`delete pizza data by id ${req.params.id}`);
}); // for admin

module.exports = router;

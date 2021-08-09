const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res, next) => {
	res.send(`get user by id ${req.params.id}`);
});

router.post('/', (req, res, next) => {
	res.send(`post new user`);
});

router.put('/:id', (req, res, next) => {
	res.send(`update user by id ${req.params.id}`);
});

router.delete('/:id', (req, res, next) => {
	res.send(`delete user by id ${req.params.id}`);
}); // for admin

module.exports = router;

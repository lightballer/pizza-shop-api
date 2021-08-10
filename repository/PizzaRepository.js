const BaseRepository = require('./BaseRepository');

class PizzaRepository extends BaseRepository {
	constructor() {
		super('Pizza');
	}
}

module.exports = new PizzaRepository();

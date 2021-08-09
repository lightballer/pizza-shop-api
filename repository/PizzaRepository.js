const BaseRepository = require('./BaseRepository');

class PizzaRepository extends BaseRepository {
	constructor() {
		super('Pizza');
	}
}

export default new PizzaRepository();

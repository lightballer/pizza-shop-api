const BaseService = require('./BaseService');
const PizzaRepository = require('../repository/PizzaRepository');

class PizzaService extends BaseService {
	constructor() {
		super(PizzaRepository);
	}
}

module.exports = new PizzaService();

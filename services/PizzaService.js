const BaseService = require('./BaseService');
const PizzaRepository = require('../repository/PizzaRepository');

class PizzaService extends BaseService {
	constructor() {
		super(PizzaRepository);
	}
}

export default new PizzaService();

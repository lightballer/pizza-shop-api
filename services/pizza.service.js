const BaseService = require('./base.service');
const PizzaRepository = require('../repository/pizza.repository');

class PizzaService extends BaseService {
  constructor() {
    super(PizzaRepository);
  }
}

module.exports = new PizzaService();

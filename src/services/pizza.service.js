const BaseService = require('./base.service');
const PizzaRepository = require('../repository/pizza.repository');
const Pizza = require('../models/Pizza');

class PizzaService extends BaseService {
  constructor() {
    super(PizzaRepository);
  }
  async create(data) {
    const existingItem = await Pizza.findOne({
      name: data.name,
    });
    if (existingItem) throw new Error('Pizza with this name already exists');
    const createdPizza = await super.create(data);
    return createdPizza;
  }
}

module.exports = new PizzaService();

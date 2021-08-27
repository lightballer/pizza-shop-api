const BaseRepository = require('./base.repository');
const Pizza = require('../models/Pizza');

class PizzaRepository extends BaseRepository {
  constructor() {
    super(Pizza);
  }
}

module.exports = new PizzaRepository();

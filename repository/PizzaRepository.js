const BaseRepository = require('./BaseRepository');
const Pizza = require('../models/Pizza');

class PizzaRepository extends BaseRepository {
  constructor() {
    super(Pizza);
  }
}

module.exports = new PizzaRepository();

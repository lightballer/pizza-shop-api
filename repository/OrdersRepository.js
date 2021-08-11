const BaseRepository = require('./BaseRepository');
const Order = require('../models/Order');

class OrdersRepository extends BaseRepository {
  constructor() {
    super(Order);
  }
}

module.exports = new OrdersRepository();

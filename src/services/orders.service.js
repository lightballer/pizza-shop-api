const BaseService = require('./base.service');
const OrdersRepository = require('../repository/orders.repository');

class OrdersService extends BaseService {
  constructor() {
    super(OrdersRepository);
  }
}

module.exports = new OrdersService();

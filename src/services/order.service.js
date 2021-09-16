const BaseService = require('./base.service');
const OrdersRepository = require('../repository/order.repository');

class OrdersService extends BaseService {
  constructor() {
    super(OrdersRepository);
  }
}

module.exports = new OrdersService();

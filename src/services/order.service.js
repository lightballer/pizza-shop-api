const BaseService = require('./base.service');
const OrdersRepository = require('../repository/order.repository');

class OrdersService extends BaseService {
  constructor() {
    super(OrdersRepository);
  }
  async createOrder(data) {
    const newOrder = await super._create(data);
    return newOrder;
  }
}

module.exports = new OrdersService();

const BaseService = require('./BaseService');
const OrdersRepository = require('../repository/OrdersRepository');

class OrdersService extends BaseService {
	constructor() {
		super(OrdersRepository);
	}
}

module.exports = new OrdersService();

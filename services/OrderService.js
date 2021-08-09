const BaseService = require('./BaseService');
const OrderRepository = require('../repository/OrderRepository');

class OrderService extends BaseService {
	constructor() {
		super(OrderRepository);
	}
}

export default new OrderService();

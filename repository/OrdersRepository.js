const BaseRepository = require('./BaseRepository');

class OrdersRepository extends BaseRepository {
	constructor() {
		super('Order');
	}
}

module.exports = new OrdersRepository();

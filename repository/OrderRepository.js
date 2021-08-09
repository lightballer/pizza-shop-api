const BaseRepository = require('./BaseRepository');

class OrderRepository extends BaseRepository {
	constructor() {
		super('Order');
	}
}

export default new OrderRepository();

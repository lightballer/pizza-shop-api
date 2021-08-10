const BaseService = require('./BaseService');
const UsersRepository = require('../repository/UsersRepository');

class UsersService extends BaseService {
	constructor() {
		super(UsersRepository);
	}
}

module.exports = new UsersService();

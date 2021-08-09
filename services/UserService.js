const BaseService = require('./BaseService');
const UserRepository = require('../repository/UserRepository');

class UserService extends BaseService {
	constructor() {
		super(UserRepository);
	}
}

export default new UserService();

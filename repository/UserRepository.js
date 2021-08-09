const BaseRepository = require('./BaseRepository');

class UserRepository extends UserRepository {
	constructor() {
		super('User');
	}
}

export default new UserRepository();

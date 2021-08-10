const BaseRepository = require('./BaseRepository');

class UsersRepository extends BaseRepository {
	constructor() {
		super('User');
	}
}

module.exports = new UsersRepository();

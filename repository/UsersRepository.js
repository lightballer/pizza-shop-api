const BaseRepository = require('./BaseRepository');
const User = require('../models/User');

class UsersRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}

module.exports = new UsersRepository();

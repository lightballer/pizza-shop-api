const BaseRepository = require('./base.repository');
const User = require('../models/User');

class UsersRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}

module.exports = new UsersRepository();

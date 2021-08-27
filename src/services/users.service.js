const BaseService = require('./base.service');
const UsersRepository = require('../repository/users.repository');

class UsersService extends BaseService {
  constructor() {
    super(UsersRepository);
  }
}

module.exports = new UsersService();

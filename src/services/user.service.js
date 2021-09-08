const BaseService = require('./base.service');
const UsersRepository = require('../repository/user.repository');
const User = require('../models/User');

class UsersService extends BaseService {
  constructor() {
    super(UsersRepository);
  }
  async createUser(data) {
    const existingUser = await User.findOne({
      $or: [{ email: data.email }, { phone: data.phone }],
    });

    if (existingUser)
      throw new Error('user with the same email or phone already exists');
    const createdUser = await super._create(data);
    return createdUser;
  }
}

module.exports = new UsersService();

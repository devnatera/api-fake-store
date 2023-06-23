const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {

  constructor() { }

  async create(data) {
    return data;
  }

  async find() {
    const data = await models.User.findAll();
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return { id, changes };
  }
}

module.exports = UserService;

const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class UserService {

    constructor() { }

    async create(data) {
        return data;
    }

    async find() {
        const query = "SELECT '1' AS DATA";
        const [data] = await sequelize.query(query);
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
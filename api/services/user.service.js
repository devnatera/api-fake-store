const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');

class UserService {

    constructor() { }

    async create(data) {
        return data;
    }

    async find() {
        const client = await getConnection();
        const resp = await client.query("SELECT '1' AS DATA");
        return resp.rows;
    }

    async findOne(id) {
        return { id };
    }

    async update(id, changes) {
        return { id, changes };
    }
}

module.exports = UserService;
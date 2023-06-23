const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class UserService {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err))
    }

    async create(data) {
        return data;
    }

    async find() {
        const query ="SELECT '1' AS DATA";
        const resp = await this.pool.query(query);
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
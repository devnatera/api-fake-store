const { Pool } = require('pg');

const pool = new Pool({
    host: '192.168.0.222',
    port: 54321,
    user: 'postgres',
    password: 'postgres',
    database: 'api_fake_store'
});

module.exports = pool;
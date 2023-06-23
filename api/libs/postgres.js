const { Client } = require('pg');

const client = new Client({
    host: '192.168.0.222',
    port: 54321,
    user: 'postgres',
    password: 'postgres',
    database: 'api_fake_store'
});

async function getConnection() {
    await client.connect();
    return client;
}

module.exports = getConnection;
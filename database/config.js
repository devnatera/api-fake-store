const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = (config.databaseUrl)
  ? config.databaseUrl
  : `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: config.dbDriver,
  },
  production: {
    url: URI,
    dialect: config.dbDriver,
    dialectOptions: {
      ssl: { rejectUnauthorized: false }
    }
  }
}

const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const setupModels = require('../database/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = (config.databaseUrl)
  ? config.databaseUrl
  : `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: config.dbDriver,
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: { rejectUnauthorized: false }
  }
}

const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

module.exports = sequelize;

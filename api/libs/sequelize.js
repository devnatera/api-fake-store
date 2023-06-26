const { Sequelize } = require('sequelize');

const { config } = require('../../config/config');

const setupModels = require('../database/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: config.dbDriver,
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Mitch00788', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

const Sequalize = require('sequelize');

const sequelize = new Sequalize('node-complete', 'root', 'Mitch00788', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize
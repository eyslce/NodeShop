var config = require('../config.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.connectionString);


module.exports = {
    example: sequelize.import(__dirname + "/example")
};
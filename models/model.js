var config = require('../config.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.connectionString);


module.exports = {
    ns_login: sequelize.import(__dirname + "/ns_login")
};
var config = require('../config.js');
var Sequelize = require('sequelize');

//var connectionString= 'mysql://root:123456@192.168.33.138:3306/nodeshop';
//连接字符串
var connectionString = 'mysql://' + config.mysql.user + ':' + config.mysql.password
    + '@' + config.mysql.host + ':' + config.mysql.port + '/' + config.mysql.database;
var sequelize = new Sequelize(connectionString);
module.exports = {
    nt_goods: sequelize.import(__dirname + "/nt_goods")
};
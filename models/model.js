var config = require('../config.js');
var Sequelize = require('sequelize');

//var connectionString= 'mysql://root:123456@192.168.33.138:3306/nodeshop';
//连接字符串
var connectionString = 'mysql://' + config.mysql.user + ':' + config.mysql.password
    + '@' + config.mysql.host + ':' + config.mysql.port + '/' + config.mysql.database;
var sequelizeObj = new Sequelize(connectionString);

//导出的对象
module.exports = {
    query:sequelizeObj.query,//自定义查询
    nt_goods: sequelizeObj.import(__dirname + "/nt_goods")
};
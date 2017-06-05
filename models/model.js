var config = require('../config.js');
var Sequelize = require('sequelize');

//连接字符串
//var connectionString= 'mysql://root:123456@192.168.33.138:3306/nodeshop';
//生产环境
var proString = 'mysql://' + config.mysql.user + ':' + config.mysql.password
    + '@' + config.mysql.host + ':' + config.mysql.port + '/' + config.mysql.database;
//开发环境
var devString = 'mysql://' + config.dev_mysql.user + ':' + config.dev_mysql.password
    + '@' + config.dev_mysql.host + ':' + config.dev_mysql.port + '/' + config.dev_mysql.database;
//判断当前环境
var connectionString = devString;
if(process.env.APPENV == 'production'){
    connectionString = proString;
}
var sequelizeObj = new Sequelize(connectionString);

//导出的对象
module.exports = {
    query:sequelizeObj.query,//自定义查询
    nt_goods: sequelizeObj.import(__dirname + "/nt_goods")
};
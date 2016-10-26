var models = require('../models/model.js');

//login 类
function login(){
    //记录登录信息
    this.addLoginInfo = function(ip,hostname,userAgent){
        models.ns_login.create({
            ip: ip,
            host_name: hostname,
            login_time: Date.now(),
            last_login_time:Date.now(),
            user_agent:userAgent
        }, {fields: ['ip', 'host_name', 'login_time','last_login_time','user_agent']}).catch(function (err) {
            console.log('write to ns_login err', err);
        });
    }
}

module.exports = new login();
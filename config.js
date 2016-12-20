var config = {
    http_port:5050,
    connectionString: 'mysql://root:123456@192.168.33.138:3306/nodeshop',
    app_key:'23569246',
    app_secret:'44553e0abe4863eaaddae035889a0323',
    tbk_url:'http://gw.api.tbsandbox.com/router/rest',
    redis:{
        host:'192.168.33.138',
        port:6379,
        db:0
    }
};
module.exports = config;
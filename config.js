var config = {
    http_port:5050,
    connectionString: 'mysql://root:123456@192.168.33.138:3306/nodeshop',
    app_key:'1023115319',
    app_secret:'sandboxe692c5f3a8d50c18bd918b1be',
    tbk_url:'http://gw.api.tbsandbox.com/router/rest',
    redis:{
        host:'192.168.33.138',
        port:6379,
        db:0
    }
};
module.exports = config;
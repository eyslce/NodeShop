var config = {
    //新浪SAE端口号
    http_port:5050,
    //淘宝客相关配置
    app_key:'23569246',
    app_secret:'44553e0abe4863eaaddae035889a0323',
    tbk_url:'https://eco.taobao.com/router/rest',
    adzone_id:68784612,
    //mysql配置
    connectionString: 'mysql://root:123456@192.168.33.138:3306/nodeshop',
    //redis配置
    redis:{
        host:'192.168.33.138',
        port:6379,
        db:0
    }
};
module.exports = config;
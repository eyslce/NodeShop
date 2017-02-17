var config = {
    //新浪SAE端口号
    http_port: 5050,
    //淘宝客相关配置
    app_key: '23569246',
    app_secret: '44553e0abe4863eaaddae035889a0323',
    tbk_url: 'https://eco.taobao.com/router/rest',
    adzone_id: 68784612,
    //mysql配置
    connectionString: 'mysql://root:123456@192.168.33.138:3306/nodeshop',
    //redis配置
    redis: {
        host: '192.168.33.138',
        port: 6379,
        db: 0
    },
    //选品库
    goodsLibrary: {
        99:{ favorites_id: 3127268, favorites_title: '9块9包邮', type: 1 },
        underwear: {favorites_id: 2673614, favorites_title: '内衣配饰（女）', type: 1},
        trousers: {favorites_id: 2673606, favorites_title: '裤子（女）', type: 1},
        skirt: {favorites_id: 2673604, favorites_title: '裙子', type: 1},
        coat: {favorites_id: 2673598, favorites_title: '上衣（女）', type: 1},
        index: {favorites_id: 2432913, favorites_title: '首页', type: 1},
        food: {favorites_id: 2432705, favorites_title: '美食', type: 1},
        house: {favorites_id: 2432700, favorites_title: '家居', type: 1},
        shoes_man: {favorites_id: 2432696, favorites_title: '鞋包-男', type: 1},
        shoes_woman: {favorites_id: 2432692, favorites_title: '鞋包-女', type: 1},
        baby: {favorites_id: 2432671, favorites_title: '母婴', type: 1},
        dress3: {favorites_id: 2432661, favorites_title: '女装3', type: 1},
        dress2: {favorites_id: 2420024, favorites_title: '女装2', type: 1},
        dress: {favorites_id: 2418800, favorites_title: '女装', type: 1}
    }
};
module.exports = config;
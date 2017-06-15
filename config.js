var config = {
    //新浪SAE端口号
    http_port: 5050,
    //淘宝客相关配置
    app_key: '23569246',
    app_secret: '44553e0abe4863eaaddae035889a0323',
    tbk_url: 'https://eco.taobao.com/router/rest',
    adzone_id: 68784612,
    pid: 'mm_29574340_19906004_68784612',
    ticket_and_goods_url: 'http://uland.taobao.com/coupon/edetail?dx=1&src=neetao&',
    page_size:100,
    //mysql配置
    mysql: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.ACCESSKEY,
        password: process.env.SECRETKEY,
        database: 'app_' + process.env.APPNAME
    },
    //测试库
    dev_mysql: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'app_neetao'
    },
    //redis配置
    redis: {
        host: '192.168.33.138',
        port: 6379,
        db: 0
    },
    //选品库
    goodsLibrary: {
        six: {favorites_id: 3242324, favorites_title: '6/6plus', type: 1},
        adultproducts: {favorites_id: 3225595, favorites_title: '成人用品', type: 1},
        makeup: {favorites_id: 3225593, favorites_title: '护肤美妆', type: 1},
        household: {favorites_id: 3225588, favorites_title: '家居家纺', type: 1},
        seven: {favorites_id: 3225584, favorites_title: '7/7plus配件', type: 1},
        calecon: {favorites_id: 3196060, favorites_title: '男内衣裤', type: 1},
        pants: {favorites_id: 3196052, favorites_title: '男裤', type: 1},
        tshirt: {favorites_id: 3196019, favorites_title: '男衬衣T恤', type: 1},
        jacket: {favorites_id: 3195901, favorites_title: '男上衣', type: 1},
        malecoat: {favorites_id: 3195761, favorites_title: '男款外套', type: 1},
        tea: {favorites_id: 3195665, favorites_title: '茶叶咖啡', type: 1},
        cookedfood: {favorites_id: 3195408, favorites_title: '肉类熟食', type: 1},
        snacks: {favorites_id: 3195271, favorites_title: '零食礼包', type: 1},
        nuts: {favorites_id: 3195196, favorites_title: '坚果枣干', type: 1},
        ladybags: {favorites_id: 3162392, favorites_title: '女包', type: 1},
        ladyshoes: {favorites_id: 3162389, favorites_title: '女鞋', type: 1},
        pregnantmothersupplies: {favorites_id: 3162384, favorites_title: '孕妈用品', type: 1},
        fancytoy: {favorites_id: 3162379, favorites_title: '益智玩具', type: 1},
        childrengarment: {favorites_id: 3162373, favorites_title: '儿童服装', type: 1},
        babyproducts: {favorites_id: 3162371, favorites_title: '婴儿用品', type: 1},
        pet: {favorites_id: 3151485, favorites_title: '9块9（宠物类）', type: 1},
        99: {favorites_id: 3127268, favorites_title: '9块9包邮', type: 1},
        underwear: {favorites_id: 2673614, favorites_title: '内衣配饰（女）', type: 1},
        trousers: {favorites_id: 2673606, favorites_title: '裤子（女）', type: 1},
        skirt: {favorites_id: 2673604, favorites_title: '裙子', type: 1},
        coat: {favorites_id: 2673598, favorites_title: '上衣（女）', type: 1},
        index: {favorites_id: 2432913, favorites_title: '首页', type: 1},
        food: {favorites_id: 2432705, favorites_title: '美食', type: 1},
        house: {favorites_id: 2432700, favorites_title: '家居', type: 1},
        shoesman: {favorites_id: 2432696, favorites_title: '鞋包-男', type: 1},
        shoeswoman: {favorites_id: 2432692, favorites_title: '鞋包-女', type: 1},
        baby: {favorites_id: 2432671, favorites_title: '母婴', type: 1},
        dress3: {favorites_id: 2432661, favorites_title: '女装3', type: 1},
        dress2: {favorites_id: 2420024, favorites_title: '女装2', type: 1},
        dress: {favorites_id: 2418800, favorites_title: '女装', type: 1}
    },
    NeeTaoCate: [
        {cid: 1, cname: '女装', is_use: 1,icon:'nt-icon-nz'},
        {cid: 2, cname: '内衣', is_use: 1,icon:'nt-icon-ny'},
        {cid: 3, cname: '母婴', is_use: 1,icon:'nt-icon-my'},
        {cid: 4, cname: '美妆', is_use: 1,icon:'nt-icon-mz'},
        {cid: 6, cname: '美食', is_use: 1,icon:'nt-icon-ms'},
        {cid: 5, cname: '鞋包配饰', is_use: 1,icon:'nt-icon-xb'},
        {cid: 7, cname: '居家', is_use: 1,icon:'nt-icon-jj'},
        {cid: 8, cname: '数码家电', is_use: 1,icon:'nt-icon-sm'},
        {cid: 9, cname: '男装', is_use: 1,icon:'nt-icon-man'},
        {cid: 10, cname: '文体车品', is_use: 1,icon:'nt-icon-wt'},
        {cid: 11, cname: '其他', is_use: 1,icon:'nt-icon-qt'}

    ]

};

module.exports = config;
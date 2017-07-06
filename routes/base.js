var path = require('path');
var config = require('../config.js');
var crypto = require('crypto');
/**
 * 路由级别中间件
 */
function base() {
    var is_mobile = false;
    //公共参数
    var common_params = {};
    //初始化
    this.init = function (req, res, next) {
        //生成淘点金签名参数
        var app_key = config.app_key;
        var secret = config.app_secret;
        var timestamp = Date.now();
        var message = secret + 'app_key' + app_key + 'timestamp' + timestamp + secret;
        var hmac = crypto.createHmac('md5', secret);
        hmac.update(message);
        var sign = hmac.digest('hex').toLowerCase();
        res.cookie("timestamp", timestamp);
        res.cookie("sign", sign);
        //设置视图路径
        common_params.view_path = 'ticket_pc';
        if (isMobile(req)) {
            is_mobile = true;
            common_params.view_path = 'mobile';
        }
        common_params.app_key = app_key;
        var category = req.query.category;
        if (!config.goodsLibrary[category]) {
            category = 'index';
        }
        common_params.category = category;
        common_params.category_name = config.goodsLibrary[category].favorites_title;
        common_params.all_category = config.NeeTaoCate;
        var params = [];
        var keys = Object.keys(req.query);
        for (var i in keys) {
            //过滤不需要的参数
            if (keys[i] != 'page_no') {
                params.push(keys[i] + '=' + req.query[keys[i]]);
            }
        }
        common_params.queryStr = params.join('&');
        next();
    };
    //获取视图路径
    this.getViewPath = function () {
        return common_params.view_path;
    };
    //判断是否移动端
    this.isMobile = function (req) {
        return isMobile(req);
    };
    //获取公共参数
    this.getCommonParams = function () {
        return common_params;
    };
    function isMobile(req) {
        // 如果有X_WAP_PROFILE则一定是移动设备
        if (req.get('X_WAP_PROFILE')) {
            return true;
        }
        //如果via信息含有wap则一定是移动设备,部分服务商会屏蔽该信息
        if (req.get('Via')) {
            //找不到为flase,否则为true
            return req.get('HTTP_VIA').indexOf("wap") !== -1 ? true : false;
        }
        //判断手机发送的客户端标志,兼容性有待提高
        if (req.get('User-Agent')) {
            var clientkeywords = [
                'nokia','sony','ericsson','mot','samsung','htc','sgh',
                'lg', 'sharp','sie-','philips','panasonic','alcatel',
                'lenovo','iphone','ipod','blackberry','meizu','android',
                'netfront','symbian','ucweb','windowsce','palm','operamini',
                'operamobi','openwave','nexusone','cldc','midp','wap','mobile'
            ];
            // 从HTTP_USER_AGENT中查找手机浏览器的关键字
            if (req.get('User-Agent').toLowerCase().match("/" + clientkeywords.join('|') + "/")) {
                return true;
            }
        }
        //协议法，因为有可能不准确，放到最后判断
        if (req.get('Accept')) {
            // 如果支持wml并且不支持html那一定是移动设备
            // 如果支持wml和html但是wml在html之前则是移动设备
            if ((req.get('Accept').indexOf('vnd.wap.wml') !== -1) && ((req.get('Accept').indexOf('text/html')) === -1
                || (req.get('Accept').indexOf('vnd.wap.wml') < req.get('Accept').indexOf('text/html')))) {
                return true;
            }
        }
        return false;
    }
}

module.exports = new base();
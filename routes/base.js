var path = require('path');
/**
 * 路由级别中间件
 */
function base() {
    //
    var view_path ;
    //初始化
    this.init = function (req, res, next) {
        view_path =path.join(req.app.get("views"), 'mobile');
        next();
    };
    this.getViewPath = function(){
        return view_path;
    };
    this.isMobile = function (req) {
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
                'nokia',
                'sony',
                'ericsson',
                'mot',
                'samsung',
                'htc',
                'sgh',
                'lg',
                'sharp',
                'sie-',
                'philips',
                'panasonic',
                'alcatel',
                'lenovo',
                'iphone',
                'ipod',
                'blackberry',
                'meizu',
                'android',
                'netfront',
                'symbian',
                'ucweb',
                'windowsce',
                'palm',
                'operamini',
                'operamobi',
                'openwave',
                'nexusone',
                'cldc',
                'midp',
                'wap',
                'mobile'
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
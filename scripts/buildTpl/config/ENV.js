/**
 * 配置文件
 * @type {{apiDomain}}
 */
var ENV = (function () {
    var docpDomain = "${docpDomain}";
    var apiDomain = "${apiDomain}";

    var ssoLoginUrl = "${ssoLoginUrl}";

    var rootPath = "${rootPath}";
    return {
        rootPath: rootPath,                                 // 根路由前缀
        docpDomain: docpDomain,
        ssoLoginUrl: ssoLoginUrl,
        apiDomain: apiDomain,
        login:{
            isStartLoginCheck: false,
            defaultRedirectUrl: rootPath + "reception",     // 登录成功后默认跳转页面
            loginUrl: docpDomain + `/#/login?service=${ssoLoginUrl}`,   // 登录页面路由
        }
    }
})();

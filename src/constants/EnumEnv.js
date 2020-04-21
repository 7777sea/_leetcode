import deepmerge from '@/utils/T/core/deepmerge';

const rootPath = "/";

let EnumEnv = deepmerge({
    rootPath,                                      // 根路由前缀
    apiDomain: "",                                 // api域名
    apiPrefix: '/',                                // api前缀
    intl: {
        lang: 'zh',                 // 语言
        timeZoneOffset: 8 * 60,     // 时区偏差, 单位分钟
    },
    respCode:{
        apiSuccessCode: 100000,                          // 请求成功响应code
        errorCode: "error",                                 // 请求失败响应code
    },
    login: {
    },
    noPermissionUrl: rootPath + 'noPermission',   //无权限默认跳转路由
}, window.ENV || {});

EnumEnv = deepmerge({
    login:{
    }
}, EnumEnv);

export default EnumEnv;

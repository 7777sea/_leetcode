import EnumEnv from '@/constants/EnumEnv';

/**
 * 转换路由
 * @param route
 * @return {string}
 */
export const to = (route) =>  EnumEnv.rootPath.replace(/\/$/, "") + "/" + route;

/**
 * 收集路由中的uri
 * @param routes
 * @return {*}
 */
export const collectRouteUris = (routes) => routes.reduce((uriList, route) => {
    if(Array.isArray(route.uri)) {
        route.uri.forEach(uri => uriList.push(uri))
    }else {
        uriList.push(route.uri);
    }
    return uriList
}, []);

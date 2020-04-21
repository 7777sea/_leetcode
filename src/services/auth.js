import { request } from '@/utils/T';
import {proxyAPI} from '@/services/proxyAPI';
import EnumEnv from '@/constants/EnumEnv';
const { get, postJSON } = request;
import permission from "./Permission"
import { EnumPermissionType, EnumRoutePermission } from "./Permission/EnumPermission"

export { permission }
export { EnumPermissionType }
export { EnumRoutePermission }

/**
 * 登录
 * @param {String} user_email
 * @param {String} password
 * @return {Promise}
 */
export const login = (user_email, password) => new Promise((resolve, reject) => {
    postJSON(proxyAPI("login"), {user_email, password}).then((resp) => {
        // 用于保存当前登录者的权限信息
        permission.set({});
        resolve(resp)
    }, (resp) => reject(resp) );
});


/**
 * 登录sso
 * @param {String} ticket
 * @return {Promise}
 */
export const loginSSOByTicket = (ticket) => new Promise((resolve, reject) => {
    postJSON(EnumEnv.login.loginAPI, {sloginUrl: EnumEnv.ssoLoginUrl, ticket}).then((resp) => {
        // 用于保存当前登录者的信息
        permission.setLoginInfo(resp.data);
        resolve(resp)
    }, (resp) => reject(resp) );
});

/**
 * 退出登录
 * @return {Promise}
 */
export const logout = () => new Promise((resolve, reject) => {
    get(EnumEnv.login.logoutAPI).then(resp => {
        // 清空权限信息
        permission.clear();
        window.location.href = EnumEnv.login.loginUrl;
        resolve(resp);
    },(resp) => reject(resp))
});


/**
 * 注册
 * @param {Object} params
 * @return {Promise}
 */
export const register = (params = {}) => postJSON(proxyAPI("register"), params);



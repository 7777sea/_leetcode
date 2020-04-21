import EnumEnv from '@/constants/EnumEnv';
import { localStore, checkType, Cookies } from '@/utils/T';
// TODO 以下为登录成功后，响应的信息结构
// const loginInfo = {
//     "rbac":[ "abnormal", "dashboard"],
//     "jwtToken":"",
//     "expireIn":300000,
//     "user":{
//         "accountId":"vcqBcJleglbLb0MWGcW",
//         "cwopAccountId":"10000",
//         "cwopUserId":"20000",
//         "deleteFlag":0,
//         "email":"admin@manager.com",
//         "groupId":"",
//         "groupName":"",
//         "name":"admin",
//         "roleCode":"1",
//         "roleId":"1",
//         "roleName":"角色名称",
//         "source":"1",
//         "telephone":"13399999999",
//         "tokenExpired":0,
//         "userId":"fPFV1YbFOYOzsAfl2Kk",
//         "userName":"admin"
//     }
// };

/**
 * 权限管理
 */
class Permission {
    constructor() {
        this.loginInfoKey = "dosm_loginInfo";
        this._cacheLoginInfo = null;
    }

    /**
     * 获取用户信息
     */
    getUserInfo = () => {
        const { user } = this._getLoginInfo();

        return {
            "accountId":user.accountId,
            "groupId":user.groupId,
            "groupName":user.groupName,
            "email":user.email,
            "userId":user.userId,
            "userName":user.userName,
            "roleId":user.roleId,
            "roleName":user.roleName,
            "roleCode":user.roleCode,
            ...user,
        };
    };

    /**
     * 设置登录信息
     * @param loginInfo
     */
    setLoginInfo = (loginInfo)=> {
        this.clear();
        localStore.set(this.loginInfoKey, JSON.stringify(loginInfo));
        this._cacheLoginInfo = loginInfo;
    };

    /**
     * 获取登录信息
     * @private
     */
    _getLoginInfo = () => {
        // if(!this._cacheLoginInfo) {
        //     const topHostname = window.top.location.hostname;
        //     if(EnumEnv.isEmbedDOCP && topHostname !== "localhost" && topHostname !== "127.0.0.1") {
        //         const loginInfo = {
        //             rbac: [],
        //             user: {},
        //         };

        //         try{
        //             const rbacVal = JSON.parse(localStore.get("_user_rbac_")).val;
        //             const userVal = JSON.parse(localStore.get("_user_info_")).val;
        //             loginInfo.rbac = rbacVal.split(",");
        //             loginInfo.user = userVal;
        //         }catch (e) {
        //             console.error("获取docp权限信息失败->", e);
        //             window.top.location.href = EnumEnv.login.docpLoginUrl;
        //         }

        //         this._cacheLoginInfo = loginInfo;
        //     }else {
        //         const loginInfo = localStore.get(this.loginInfoKey);
        //         if (!loginInfo || loginInfo == "null") {
        //             this.clear();
        //             window.location.href = EnumEnv.login.loginUrl;
        //             return {};
        //         }
        //         this._cacheLoginInfo = JSON.parse(loginInfo);
        //     }
        // }

        return this._cacheLoginInfo;
    };

    /**
     * 是否已经登录
     * @return {boolean}
     */
    isLogin = () => {
        return Object.values(this._getLoginInfo()).length !== 0;
    }

    /**
     * 验证是否有权限
     */
    can(mark) {
        const { rbac } = this._getLoginInfo();
        return rbac.includes(mark);
    }

    /**
     * 验证是否有权限,显示组件
     * @param {string} mark 权限标识
     * @param {string} component 组件
     * @param {string} defaultVal 默认显示
     */
    showCom(mark, component, defaultVal = null) {

        return this.can(mark) ? component : defaultVal;
    }


    /**
     * 保存权限
     * @param permissions
     */
    set(permissions = {}) {
        if(!checkType.isPlainObject(permissions)) throw new Error("权限格式不正确");
    }

    /**
     * 获取权限
     * @return {*}
     */
    get(){
        const { rbac } = this._getLoginInfo();
        return {};
    }

    /**
     * 清除
     */
    clear(){
        localStore.remove(this.loginInfoKey);
        this._cacheLoginInfo = null
    }

}

/**
 * 导出权限
 * @type {Permission}
 */
export default new Permission();

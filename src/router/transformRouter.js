import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link, HashRouter, withRouter } from 'react-router-dom';
import loadable from '@/utils/loadable';
import { request } from '@/utils/T';

import MainLayout from '@/layouts/MainLayout';

import { StoreCtx, globalStore } from '@/store';
import EnumRouter from '@/constants/EnumRouter';
import EnumEnv from '@/constants/EnumEnv';

const Layout = withRouter(({history, isMainLayout, children}) => {

    useEffect(() => {
        const { registerHistory } = request; 
        registerHistory && registerHistory(history);
    }, [history]);

    if(isMainLayout){
        return <MainLayout>{children}</MainLayout>
    }

    return children;
})
// 懒加载组件
const lazy = (uri, component, isMainLayout, stores, props ) => {
    
    const LazyComponent = loadable(component)

    return () => {
        // 保证页面切换时, 重新实例化mobx状态实例
        const storeIns = { globalStore };

        if(stores){
            for(let [key, Store] of Object.entries(stores)){
                storeIns[key] = new Store();
            }
        }

        return(
            <StoreCtx.Provider value={storeIns}>
                <Layout  isMainLayout={isMainLayout}>
                    <LazyComponent {...props} />
                </Layout>
            </StoreCtx.Provider>
        )
    }
};

/**
 * 检测是否登录
 * @return {*}
 */
const checkLoginRedirect = () => {
    return <Redirect to={EnumEnv.login.defaultRedirectUrl} />
    // if(permission.isLogin()){
    //     return <Redirect to={EnumEnv.login.defaultRedirectUrl} />
    // }else {
    //     return <div />;
    // }
}

/**
 * 路由配置
 * @param {Array} routes
 * @return {Function}
 *
 * usage:
 *  routes = [
         {
             uri: "/",                                          // 该字段必填
             component: import("./components/CodeEditor"),      // 该字段必填
             props: "传入组件的props"                             // 该字段可选, 必须是对象
             isMainLayout: true,                                // 该字段可选, 是否开启MainLayout布局, 默认是true
         },
    ];
 */
const transformRouter = (routes) => () => (
        <BrowserRouter
            forceRefresh={!('pushState' in window.history)}
            keyLength={12}
        >
            <Switch>
                <Route exact path={EnumRouter.rootRoute} render={() => checkLoginRedirect()} />
                <Route exact path="/" render={() => checkLoginRedirect()}  />

                {
                    routes.map((item, index) => {
                        // exact关键字表示对path进行完全匹配
                        let {uri, component, isMainLayout, stores, props} = item;
                        props = props || {};
                        isMainLayout = typeof isMainLayout === 'undefined' ? true : isMainLayout;

                        return (Array.isArray(uri)? uri : [uri]).map((realUri) =><Route
                            key={index}
                            path={realUri}
                            exact={true}
                            component={lazy(realUri, component, isMainLayout, stores, props)}
                        />)
                    })
                }


            </Switch>

        </BrowserRouter>
);

export default transformRouter;



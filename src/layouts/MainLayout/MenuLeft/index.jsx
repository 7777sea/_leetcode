import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import styles from "./index.scss";
import { EnumMainHeaderHeight } from '../constants/EnumUI'
import EnumEnv from '@/constants/EnumEnv';
import { LayoutCtx } from '../layoutContext';
import DoAppIcon from "@/components/DoAppIcon";
import { permission } from '@/services/auth'
const packages = require('../../../../package.json');

// 递归获取菜单
const formatLeftMenu = (menus, currentUrl) => menus.map((val, index) => {
    let realUrl = (() => {
        if (Array.isArray(val.url)) {
            if (val.url.indexOf(currentUrl) !== -1) return currentUrl;
            return val.url[0];
        }
        return val.url;
    })();

    const linkTo = Array.isArray(val.url) ? val.url[0] : val.url;
    const target = val.target || "";
    const RouteLink = target === "_blank" ? ({children, to,  ...rest}) => (<a href={to} {...rest}>{children}</a>) : Link;
    const isSelected = currentUrl === realUrl;

    return <Menu.Item key={index} className={isSelected ? styles.active : ""}>
        <RouteLink to={linkTo} target={target}>
            {val.icon ? <DoAppIcon {...val.icon} className={styles.icon}/> : null}
            <span>{val.label}</span>
        </RouteLink>
    </Menu.Item>
    return permission.showCom(
        val.permissionType,
        <Menu.Item key={index} className={isSelected ? styles.active : ""}>

            <RouteLink to={linkTo} target={target}>
                {val.icon ? <DoAppIcon {...val.icon} className={styles.icon}/> : null}
                <span>{val.label}</span>
            </RouteLink>

        </Menu.Item>
    )
});

const MenuLeft = ({leftMenu, currentUrl, updateCollapsed}) => {
    //配置中取是否显示DOSM的LOGO,用于区分是否嵌入DOCP
    const { isEmbedDOCP } = EnumEnv;
    return (
        <LayoutCtx.Consumer>
            {({leftMenuW, isCollapsed}) => {
                return leftMenu.length < 1 ? null : (
                    <Layout.Sider
                        theme="dark"
                        className={styles["menu-left"]}
                        width={leftMenuW}
                        collapsed={isCollapsed}
                        collapsedWidth={leftMenuW}
                    >
                        { !isEmbedDOCP
                            ? (
                                <div className={styles.logo} style={{height: EnumMainHeaderHeight}}>
                                    <DoAppIcon type = 'logo' style = {{fontSize:'40px'}}/>
                                </div>
                            )
                            :''
                        }
                        <div className = {styles['sider-toggle']}>
                            {
                                isCollapsed
                                    ?<DoAppIcon type = 'sider-toggle-hide' style = {{fontSize:'20px'}} onClick = { () => updateCollapsed(!isCollapsed) }/>
                                    : <DoAppIcon type = 'sider-toggle' style = {{fontSize:'20px'}} onClick = { () => updateCollapsed(!isCollapsed) }/>
                            }
                        </div>
                        <Menu>
                            {formatLeftMenu(leftMenu, currentUrl)}
                        </Menu>
                        {/* <div className={styles['version']}>
                            <div className={styles['version-text']}>
                                {`v ${packages.version}`}
                            </div>
                        </div> */}
                    </Layout.Sider>
                );
            }}
            
        </LayoutCtx.Consumer>
    )

};

MenuLeft.propTypes = {
    leftMenu: PropTypes.array.isRequired,
    currentUrl: PropTypes.string.isRequired,
};

export default MenuLeft;

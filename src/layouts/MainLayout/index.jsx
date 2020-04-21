import React, { useState } from 'react';
import styles from './index.scss';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { LayoutCtx } from './layoutContext';
export MainHeader from './MainHeader';
export MainContent from "./MainContent";
const leftMenuSpreadW = 202;        // 左侧菜单展开宽度
const leftMenuCollapsedW = 56;      // 左侧菜单收缩宽度

let leftMenuW = leftMenuSpreadW;
let currentIsCollapsed = false;

const MainLayout = (props)=> {
    const [ isCollapsed, setCollapsed ] = useState(currentIsCollapsed);
    const updateCollapsed = (isCollapsed) => {
        currentIsCollapsed = isCollapsed;

        if(isCollapsed){
            leftMenuW = leftMenuCollapsedW;
        }else {
            leftMenuW = leftMenuSpreadW;
        }

        setCollapsed(isCollapsed)
    };
    return (
        <LayoutCtx.Provider value={{leftMenuW, isCollapsed}}>
            <Layout className={styles["main-layout"]}>
                <Layout className={styles["app-content"]}>
                    {props.children}

                </Layout>
            </Layout>
        </LayoutCtx.Provider>
    );
}

export default withRouter(MainLayout);

export {LayoutCtx};


import { configure, action, computed } from 'mobx';
import { createContext } from 'react';
import GlobalStore  from "./GlobalStore";

/**
 * mobx的配置
 */
configure({
    enforceActions: "observed",     // 强制使用action
});

export const StoreCtx = createContext({});

export const globalStore = new GlobalStore();

import { collectRouteUris } from "../util";
import EnumRouter from './index';

/**
 * 数据报告相关的路由
 */
export const routes = [
    {
        uri: EnumRouter.demo,
        component: import("@/pages/Demo"),
        stores: {}
    }
];

export const uriList = collectRouteUris(routes);

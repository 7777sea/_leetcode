import { to } from './util';

import globalRoute from './globalRoute'; 
import demo from './demo';
/**
 * 路由枚举
 */
const EnumRouter = {
    rootRoute: to(''),		        // 根路由
    ...globalRoute,        // 全局路由
    ...demo,         //首页
};

export default EnumRouter;

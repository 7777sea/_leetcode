import React, { createContext } from 'react';
import { EnumMenuLeftWidth } from "./constants/EnumUI";

export const LayoutCtx = createContext({
    leftMenuW: EnumMenuLeftWidth,     // 左侧菜单的宽度
});

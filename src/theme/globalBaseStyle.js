import css from 'styled-jsx/css';
import { theme } from "./index";

/**
 * 全局样式
 */
// language=SCSS
export const globalBaseStyle = css.global`
a{
    font-size: 14px;
    color: #3C6AB7;
}

// 选中效果设置
::selection{
    background-color: rgba(0,201, 195, 0.5);
}

// 定义获取字体样式的方法
@mixin get-font-style($font-size){
    font-family: ${theme.fontFamily};
    font-size: $font-size;
    &-bold{
        font-size: $font-size;
        font-weight: ${theme.fontWeight.bold};
         &-main{
             font-size: $font-size;
             font-weight: ${theme.fontWeight.bold};
             color: ${theme.fontColor.main};
         }
         &-sub{
             font-size: $font-size;
             font-weight: ${theme.fontWeight.bold};
             color: ${theme.fontColor.sub};
         }
    }
    
    &-regular{
        font-size: $font-size;
        font-weight: normal;
         &-main{
            font-size: $font-size;
            font-weight: ${theme.fontWeight.normal};
            color: ${theme.fontColor.main};
         }
         &-sub{
            font-size: $font-size;
            font-weight: normal;
            color: ${theme.fontColor.sub};
         }
    }
}

.font-12{
    @include get-font-style(${theme.fontSize.s12});
}

.font-14{
    @include get-font-style(${theme.fontSize.s14});
}

.font-16{
    @include get-font-style(${theme.fontSize.s16});
}

.font-20{
    @include get-font-style(${theme.fontSize.s20});
}
`

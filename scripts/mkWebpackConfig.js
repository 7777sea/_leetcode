const path = require("path");
const os = require("os")
const fs = require("fs")
const { assemble, pipe, depend } = require("webpack-pipe");

// 入口配置
const entry = (config) => depend.merge({
    entry:{
        app: ["./src"],
        sso: ["./src/sso"],
    },
    resolve: {
        "modules": [
            "web_modules",
        ],
        alias: {
            "@": path.resolve(__dirname, '../src/'),
        }
    },
    output:{
        publicPath: "/public/",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);

/**
 * babel支持国际化配置
 * @param config
 * @return {*}
 */
const intl =  (config) => {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // 使用的babel插件是: babel-plugin-react-intl
            rule.options.cacheDirectory = false; // 保证提取的信息是最新的
            rule.options.plugins.push(['react-intl', {"messagesDir": "./i18n-messages"}]);

            return rule;
        }

        return rule;
    });

    return config;
};

/**
 * styled jsx配置
 * @param config
 * @return {*}
 */
const styledJsx = (config) => {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // styled-jsx
            rule.options.plugins.push([
                "styled-jsx/babel",
                {
                    "vendorPrefixes": true,     // 为css自动添加前缀
                    "plugins": [
                        ["styled-jsx-plugin-sass",{sassOptions: {}}]
                    ]
                }
            ]);
            return rule;
        }

        return rule;
    });

    return config;
};

/**
 *
 * @param config
 * @return {*}
 */
const antdTheme = (config) => {
    const themeConf = require("./theme");
    config.module.rules = config.module.rules.map(rule => {
        if (Array.isArray(rule.use)){
            rule.use = rule.use.map(item => {
                if(item.loader === "less-loader"){
                    item.options.modifyVars = Object.assign(item.options.modifyVars, themeConf);
                }
                return item;
            });

            return rule;
        }

        return rule;
    });
    return config
}

/**
 * 组装webpack config
 * @return {*}
 */
module.exports = (pipeNodes = []) => {
    const config = assemble([
        ...pipeNodes,
        intl,
        styledJsx,
        antdTheme,

        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        pipe.babelAntd,
        pipe.babelReact,

        pipe.miniCssExtractPlugin,
        pipe.provideReactPlugin,
        pipe.webpackbarPlugin,
        entry,
    ]);

    return config;
};

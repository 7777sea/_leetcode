/**
 * 打包编译
 */
const path = require("path");
const mkWebpackConfig = require("./mkWebpackConfig");
const { doBuild, pipe, tool} = require("webpack-pipe");

const buildPath = path.resolve(__dirname, "../build");
doBuild(mkWebpackConfig([pipe.production, pipe.autoDllReactPlugin]), {
    proxyPath: "/",
    buildPath: buildPath,
    isCreateIndexHtml: false,
    buildStart: async () => {
        await tool.delDir(buildPath);
    },
    buildFinished: async () => {
        await tool.copyDir(path.resolve(__dirname, "buildTpl"), buildPath);
    },
});



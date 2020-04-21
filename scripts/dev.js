const mkWebpackConfig = require("./mkWebpackConfig");
const { doDev, pipe } = require("webpack-pipe");
const webpackConfig = mkWebpackConfig([pipe.development]);

doDev({
	webpackConfig,
    devServerConfig: {},
	host: "0.0.0.0",
	port: 8008
});





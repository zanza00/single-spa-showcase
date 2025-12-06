const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "zanza00";
  const isLocal = webpackConfigEnv && webpackConfigEnv.isLocal;
  
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
    outputSystemJS: false,
  });

  defaultConfig.externals = [
    ...defaultConfig.externals,
    "react",
    "react-dom",
    "react-dom/client",
  ];

  return merge(defaultConfig, {
    output: {
      // For GitHub Pages, assets are served from /single-spa-showcase/
      publicPath: isLocal ? "/" : "/single-spa-showcase/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal,
          orgName,
        },
      }),
    ],
  });
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          alias: {
            "@components": "./src/components",
            "@theme": "./src/theme",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@helpers": "./src/helpers",
            "@services": "./src/services",
            "@api": "./src/api",
            "@domain": "./src/domain",
            "@infra": "./src/infra",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};

const path = require("path");

module.exports = {
  webpack: function (config, env) {
    const override = {
      ...config,
      resolve: {
        ...config.resolve,

        alias: {
          ...config.resolve.alias,
          "@": path.resolve(__dirname, "src/"),
        },
      },
    };

    return override;
  },
};

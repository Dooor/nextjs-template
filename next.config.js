const withTypescript = require("@zeit/next-typescript");
const defaultConfig = {
  distDir: '.next',
  useFileSystemPublicRoutes: true,
}

module.exports = withTypescript(defaultConfig);

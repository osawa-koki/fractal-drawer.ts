const EnvInfo = require("../next.config.js");

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV === "production";

const Settings = {
  ProjectName: "fractal-drawer.ts",
  RootPath: isProd ? EnvInfo.assetPrefix : "",
  Version: "0.0.1",
};

export default Settings;

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "黄道婆文档",
      description: "黄道婆文档中心，交易文档，管家文档，教育文档等",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

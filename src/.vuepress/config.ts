import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Java学习笔记", // logo 文字
      description: "一个00后编程爱好者",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

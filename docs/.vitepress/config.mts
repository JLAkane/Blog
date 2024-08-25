import { defineConfig } from "vitepress";
import nav from "./nav.mts";
import sidebar from "./sidebar.mts";

export default defineConfig({
  lang: "en-US",

  titleTemplate: ":title | Akane的个人博客",

  description: "Akane's 学习日记",

  /**
   * 在html的head标签中渲染的内容 可以引入外部CSS样式嵌入
   */
  head: [],

  // base: "/Blog/",

  cleanUrls: true,

  themeConfig: {
    siteTitle: "学习笔记",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    outlineTitle: "页面导航",

    socialLinks: [{ icon: "github", link: "https://github.com/JLAkane/Blog" }],

    editLink: {
      text: "编辑此页面",
      pattern: "https://github.com/JLAkane/Blog/edit/master/docs/:path",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
        hourCycle: "h24",
      },
    },

    search: {
      provider: "local",
    },
  },
});

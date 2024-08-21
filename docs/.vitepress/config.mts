import { Content, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",

  titleTemplate: ":title | Akane的个人博客",

  description: "Akane's 学习日记",

  /**
   * 在html的head标签中渲染的内容 可以引入外部CSS样式嵌入
   */
  head: [],

  base: "/Blog",

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
      {
        text: "Tools",
        items: [{ text: "Docker", link: "/tools/docker/docker入门" }],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Docker Study",
        link: "/tools/docker/docker入门",
      },
    ],

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

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akane's学习笔记",
  description: "Akane's Blog",
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
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Docker Study", link: "/tools/docker/docker入门" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/JLAkane/Blog" }],
  },
  base: "/Blog",
});

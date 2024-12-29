import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";

//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "搜索",
  placeholder: "请输入关键字",
  allow: [],
  ignore: [],
};
  
const base = "/si-labs/";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,  
  vite: { plugins: [SearchPlugin(options)] },

  title: "Spirtial Intelligence Labs",
  description: "追逐真理，不断革命！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: '文档', link: '/documents' },
      { text: 'About/Join Us', link: '/join-us'}
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '--Runtime API Examples', link: '/api-examples' },

        ]
      },
      {
        text: 'VitePress',
        items: [
          { text: 'VitePress', link: '/documents/vitepress' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})



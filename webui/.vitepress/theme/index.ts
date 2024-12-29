// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // async enhanceApp() {
    // if (!import.meta.env.SSR) {
    //   const { loadOml2d } = await import('oh-my-live2d');
    //   loadOml2d({
    //     models: [
    //       {
    //         path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
    //       }
    //     ]
    //   });
    // }
  // }

} satisfies Theme

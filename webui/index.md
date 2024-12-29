---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Spirtial Intelligence Labs"
  text:  "意识智能实验室"
  tagline: "追逐真理，不断革命！"
  actions:
    - theme: brand
      text: 简介
      link: /#
    - theme: alt
      text: 最新动态
      link: /recent

features:

  - title: 志存高远
    details: 不登高山，不知天之高也；不临深溪，不知地之厚也；上交不谄，下交不渎；与天地兮比寿，与日月兮齐光；时人莫小池中水，浅处不妨有卧龙。

  - title: 自我革命
    details: 将自我革命的宝贵品质熔铸在精神血脉里，并将其展现为一种坚持真理、修正错误的崇高追求，一种革故鼎新、守正出新的胆识魄力！自我革命没有休止符，也没有中间站！

  - title: 社会价值
    details: 竭泽而渔，鱼不可复得矣；穷则变，变则通，通则久；观乎天文，以察时变；观乎人文，以化成天下；
  

---

<script setup>

import IndexUI from './components/IndexUI.vue'
</script>

<IndexUI class='full' />

<style >
  .container:has(.full){
    margin-top: 20px;
    width: 100%;
    padding: 0;
    max-width: none !important;
  }
</style>
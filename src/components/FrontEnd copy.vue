<script setup lang="ts">
import ListItem from './ListItem.vue'
import CrouselItem from './CrouselItem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <!-- <ListItem>
    <template #heading>商店向けHP</template>
    <template #itemImg>
      <img alt="mdn-cafe" src="@/assets/img/frontend/mdn-cafe.png" width="100%" height="auto" />
    </template>
    使用言語：Vue.js,Nuxt.js<br>
    ツール：MicroCMS
  </ListItem>

  <ListItem>
    <template #heading>教材管理ツール</template>
    <template #itemImg>
      <img alt="lesson-tools" src="@/assets/img/frontend/lesson-tools.png" width="100%" height="auto" />
    </template>
    使用言語：Vue.js,TypeScript
  </ListItem>

  <ListItem>
    <template #heading>ポートフォリオ</template>

    使用言語：Vue.js,TypeScript
  </ListItem>

  <ListItem>
    <template #heading>ログイン実装</template>
    <template #itemImg>
      <img alt="react-login" src="@/assets/img/frontend/react-login.png" width="100%" height="auto" />
    </template>
    使用言語：React.js
  </ListItem> -->

  <CrouselItem />
</template>

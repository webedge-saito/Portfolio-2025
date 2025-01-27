<template>
  <carousel :items-to-show="1" :wrapAround="true">
    <slide >
        <div class="item">
            <div class="details">
            <h3>商店向けHP</h3>
            <div class="itemImg">
                <img alt="mdn-cafe" src="@/assets/img/frontend/mdn-cafe.png" width="100%" height="auto" />
            </div>
            使用言語：Vue.js,Nuxt.js<br>
            ツール：MicroCMS<br>
            <a href="https://graceful-pithivier-449d3f.netlify.app/" target="_black">サイトはこちら</a>
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>教材管理ツール</h3>
            <div class="itemImg">
                <img alt="lesson-tools" src="@/assets/img/frontend/lesson-tools.png" width="100%" height="auto" />
            </div>
            使用言語：Vue.js,TypeScript
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>ポートフォリオ</h3>
            <div class="itemImg">
                <img alt="portfolio2025" src="@/assets/img/frontend/portfolio2025.png" width="100%" height="auto" />
            </div>
            使用言語：Vue.js,TypeScript
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>ログイン実装</h3>
            <div class="itemImg">
                <img alt="react-login" src="@/assets/img/frontend/react-login.png" width="100%" height="auto" />
            </div>
            使用言語：React.js<br>
            </div>
        </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.itemImg{
  width: 60vw;
  height:37vw;
  max-width: 600px;
  max-height: 337px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.4rem;
  background: var(--vt-c-white);
}

.carousel__pagination{
  bottom:-5vw;
}
button.carousel__pagination-button{
  width: 4px;
  height:4px;
  border-radius: 50%;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem;
  }
  .carousel__pagination{
    bottom:0;
  }
  .itemImg{
    width: 40vw;
    height:22vw;
  }
}
</style>
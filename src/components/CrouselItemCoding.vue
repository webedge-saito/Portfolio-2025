<template>
  <carousel :items-to-show="1" :wrapAround="true">
    <slide >
        <div class="item">
            <div class="details">
            <h3>会社HP</h3>
            <div class="itemImg">
                <img alt="nichiha" src="@/assets/img/coding/nichiha.png" width="100%" height="auto" />
            </div>
            使用言語：html,css,js<br>
            ツール：Movable Type<br>
            <a href="https://www.nichiha.co.jp/" target="_black">サイトはこちら</a>
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>公共向け事業支援サイト</h3>
            <div class="itemImg">
                <img alt="ehime-hikitsugi" src="@/assets/img/coding/ehime-hikitsugi.png" width="100%" height="auto" />
            </div>
            使用言語：html,css,js<br>
            ツール：WordPress<br>
            <a href="https://ehime-hikitsugi.go.jp/" target="_black">サイトはこちら</a>
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>一般法人財団活動サイト</h3>
            <div class="itemImg">
                <img alt="unagi-zaidan" src="@/assets/img/coding/unagi-zaidan.png" width="100%" height="auto" />
            </div>
            使用言語：html,css,js<br>
            ツール：Movable Type<br>
            <a href="https://www.unagi-zaidan.or.jp/" target="_black">サイトはこちら</a>
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>タレント起用LP</h3>
            <div class="itemImg">
                <img alt="mytare" src="@/assets/img/coding/mytare.png" width="100%" height="auto" />
            </div>
            使用言語：html,css,js<br>
            <a href="https://mytare.jp/" target="_black">サイトはこちら</a>
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>レンタルおもちゃサイト</h3>
            <div class="itemImg">
                <img alt="chachacha-toy" src="@/assets/img/coding/chachacha-toy.png" width="100%" height="auto" />
            </div>
            使用言語：html,css,js<br>
            ツール：WordPress<br>
            <a href="https://chachacha-toy.com/" target="_black">サイトはこちら</a>
            </div>
        </div>
    </slide>
    <slide >
        <div class="item">
            <div class="details">
            <h3>EC通販サイト</h3>
            <div class="itemImg">
                <img alt="chachacha-toy" src="@/assets/img/coding/japanet.png" width="100%" height="auto" />
            </div>
            使用言語：html,css,js<br>
            <a href="https://www.japanet.co.jp/shopping/" target="_black">サイトはこちら</a>
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

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem;
  }
  .itemImg{
    width: 600px;
    height: 337px;
  }
  .carousel__pagination{
    bottom:0;
  }
}
</style>
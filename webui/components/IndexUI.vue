<template>
  <div class="container">
    <!-- 标题部分 -->
    <h1 class="title">Welcome to Spirtial Intelligence Labs</h1>
    <p class="subtitle">莫愁前路无知己，天下谁人不识君！</p>

    <!-- 按钮 -->
    <div class="button-container">
      <button class="btn-install" @click="startCompose">Join us</button>
    </div>

    <!-- 自动轮播图 -->
    <div class="carousel-container" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(item, index) in images" :key="index">
          <img :src="item.src" :alt="item.alt" class="carousel-image" />
          <!-- <p class="caption">{{ item.caption }}</p> -->
        </div>
      </div>

      <!-- 分页指示器：覆盖在轮播图下方 -->
      <div class="carousel-pagination">
        <span
          v-for="(item, index) in images"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <!-- 图片网格展示 -->
    <div class="move-grid">
    <div class="grid-container">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="grid-item"
        @click="goToSlide(index)"
      >
        <img :src="item.src" :alt="item.alt" />
        <p class="caption">{{ item.caption }}</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const prefix_url = 'img-scroll/'
// 图片数据
const images = ref([
  { src: prefix_url + "img1.png", alt: "Image 1", caption: "Vrch Studio" },
  { src: prefix_url + "img2.png", alt: "Image 2", caption: "Hakonaiwa and Andidea" },
  { src: prefix_url + "img3.png", alt: "Image 3", caption: "Credit" },
  { src: prefix_url + "img4.png", alt: "Image 4", caption: "Credit" },
  { src: prefix_url + "img5.png", alt: "Image 5", caption: "Credit" }
]);

// 当前轮播索引
const currentIndex = ref(0);
let autoplayInterval = null;

// 启动自动轮播
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 2000); // 切换间隔 2 秒
};

// 停止自动轮播
const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// 跳转到指定幻灯片
const goToSlide = (index) => {
  currentIndex.value = index;
};

// 安装按钮点击逻辑
const startCompose = () => {
  window.open("/join-us", "_blank");
};

// 挂载时启动自动轮播，卸载时清除定时器
onMounted(startAutoplay);
onUnmounted(stopAutoplay);
</script>

<style scoped>
/* 全局容器样式 */
.container {
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 40px;
  font-family: Arial, sans-serif;
}

/* 标题样式 */
.title {
  font-size: 3rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

/* 按钮样式 */
.button-container {
  margin: 20px;
}

.btn-install {
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-install:hover {
  background-color: #ccc;
}

/* 自动轮播图样式 */
.carousel-container {
  width: 80%;
  margin: 0 auto 40px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.caption {
  margin-top: 10px;
  font-size: 0.9rem;
}

/* 分页指示器样式 */
.carousel-pagination {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #fff;
}

/* 图片网格样式 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
  animation: _move 100s infinite linear !important;
}

.grid-item {
  cursor: pointer;
  transition: transform 0.3s;
}

.grid-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.grid-item:hover {
  transform: scale(1.05);
}
.move-grid{
  overflow: hidden;
}

@keyframes _move {
  0% {
    transform: translateX(35%) ;
  }
  50%{
    transform: translateX(-35%) ;
  }
  100% {
    transform: translateX(35%) ;
  }
}
</style>

<template>
  <div class="banner h-38 md:h-59 lg:h-84 bg-white
    rounded-xl shadow-default flex items-center mb-10">
    <h2 class="text-2xl md:text-3xl font-bold leading-tight ml-6 sm:ml-7 md:ml-12">
      探索。
      <br>
      福爾摩沙
    </h2>
  </div>

  <ThemesComponent theme="熱門景點"
    class="mb-10" />
  <ThemesComponent theme="觀光活動"
    class="mb-10" />
  <ThemesComponent theme="美食品嚐"
    class="mb-10" />
  <ThemesComponent theme="住宿推薦" />
</template>

<script>
import ThemesComponent from '@/components/ThemesComponent.vue';

export default {
  components: {
    ThemesComponent,
  },
};
</script>

<style scoped>
.banner {
  background-image: url(/public/images/banner.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: bottom right;
}
@media (min-width: 640px) {
  .banner {
    background-size: contain;
  }
}
</style>

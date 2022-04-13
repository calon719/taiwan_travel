<template>
  <div class="banner h-38 md:h-59 lg:h-84 bg-white
    rounded-xl shadow-default flex items-center mb-10">
    <h2 class="text-2xl md:text-3xl font-bold leading-tight ml-6 sm:ml-7 md:ml-12">
      探索。
      <br>
      福爾摩沙
    </h2>
  </div>

  <ThemesComponent theme="熱門景點" :tourismData="scenicspotData"
    class="mb-10" />
  <ThemesComponent theme="觀光活動" :tourismData="activityData"
    class="mb-10" />
  <ThemesComponent theme="美食品嚐" :tourismData="restaurantData"
    class="mb-10" />
  <ThemesComponent theme="住宿推薦" :tourismData="hotelData" />
</template>

<script>
import ThemesComponent from '@/components/ThemesComponent.vue';

export default {
  data() {
    return {
      scenicspotData: [],
      hotelData: [],
      restaurantData: [],
      activityData: [],
      apiPath: [
        'ScenicSpot',
        'Hotel',
        'Restaurant',
        'Activity',
      ],
    };
  },
  inject: ['headerOptions'],
  methods: {
    getData() {
      this.apiPath.forEach(this.catchErr(this.asyncFn));
    },
    async asyncFn(path) {
      const res = await this.$http.get(
        `${process.env.VUE_APP_APIBASE}/${path}?$top=3&$format=JSON`,
        { header: this.headerOptions },
      );
      this[`${path.toLowerCase(path)}Data`] = res.data;
    },
    catchErr(asyncFn) {
      return (path) => asyncFn(path).catch((err) => {
        console.dir(err);
      });
    },
  },
  created() {
    this.getData();
  },
  components: {
    ThemesComponent,
  },
  unmounted() {
    const tourismData = [
      ...this.scenicspotData,
      ...this.hotelData,
      ...this.restaurantData,
      ...this.activityData,
    ];
    localStorage.setItem('tourismData', JSON.stringify(tourismData));
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

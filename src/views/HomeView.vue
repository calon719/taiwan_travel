<template>
  <div class="banner h-38 md:h-59 lg:h-84 bg-white
    rounded-xl shadow-default flex items-center mb-10">
    <h2 class="text-2xl md:text-3xl font-bold leading-tight ml-6 sm:ml-7 md:ml-12">
      探索。
      <br>
      福爾摩沙
    </h2>
  </div>

  <ThemesComponent
    v-for="(categoryName, key) in tourismCategories"
    :key="`home${categoryName}`"
    :theme="categoryName"
    :category="key"
    :tourismData="this[`${key.toLowerCase()}Data`]"
    :class="{ 'mb-10': key !== apiPath[apiPath.length - 1] }" />
</template>

<script>
import ThemesComponent from '@/components/ThemesComponent.vue';
import tourismCategories from '@/data/tourismCategories';

export default {
  data() {
    return {
      tourismCategories,
      scenicspotData: [],
      hotelData: [],
      restaurantData: [],
      activityData: [],
      apiPath: [...Object.keys(tourismCategories)],
    };
  },
  emits: ['emit-loading-status'],
  inject: [
    'getAuthorizationHeader',
    'showErrMessage',
  ],
  methods: {
    getData() {
      this.$emit('emit-loading-status', true);
      this.apiPath.forEach(this.catchErr(this.asyncFn));
    },
    async asyncFn(path) {
      const res = await this.$http.get(
        `${process.env.VUE_APP_APIBASE}/${path}?$top=3&$format=JSON`,
        { headers: this.getAuthorizationHeader() },
      );
      this[`${path.toLowerCase(path)}Data`] = res.data;
    },
    catchErr(asyncFn) {
      return (path) => asyncFn(path).catch(() => {
        this.showErrMessage();
        this.$emit('emit-loading-status', false);
      }).then(() => {
        const dataCheck = [];

        this.apiPath.forEach((item) => {
          const status = this[`${item.toLowerCase(path)}Data`].length > 0;
          dataCheck.push(status);
        });

        if (dataCheck.every((data) => data)) {
          this.$emit('emit-loading-status', false);
        }
      });
    },
  },
  created() {
    this.getData();
  },
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

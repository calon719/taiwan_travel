<template>
  <h3 class="text-2xl font-bold mb-4"
    v-show="cityName !== ''"
  >{{ cityName }}</h3>
  <div class="flex items-center mb-8">
    <img src="../../public/images/ic_baseline-sort.svg" alt="icon" />
    <ul class="grid grid-cols-4 gap-3 text-lg ml-4 overflow-auto">
      <li>
        <RouterLink
          :to="{
            path: '/search',
            query: { category: 'ScenicSpot', city: $route.query.city }
          }"
          class="block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg"
          :class="$route.query.category === 'ScenicSpot'
            ? 'text-white bg-primary cursor-default'
            : ''">
          觀光
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/search',
            query: { category: 'Restaurant', city: $route.query.city }
          }"
          class="block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg"
          :class="$route.query.category === 'Restaurant'
            ? 'text-white bg-primary cursor-default'
            : ''">
          餐飲
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/search',
            query: { category: 'Hotel', city: $route.query.city }
          }"
          class="block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg"
          :class="$route.query.category === 'Hotel'
            ? 'text-white bg-primary cursor-default'
            : ''">
          旅宿
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{
            path: '/search',
            query: { category: 'Activity', city: $route.query.city }
          }"
          class="block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg"
          :class="$route.query.category === 'Activity'
            ? 'text-white bg-primary cursor-default'
            : ''">
          活動
        </RouterLink>
      </li>
    </ul>
  </div>

  <CardList v-if="tourismData.length" :cardData="tourismData" />
  <p v-else>沒有符合的搜尋結果，請試著換關鍵字在搜尋一次。</p>

  <div class="flex justify-center">
    <PaginationComponent v-if="tourismData.length" />
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import CardList from '@/components/CardList.vue';
import tourismThemes from '@/data/tourismThemes';
import regionsOfTaiwan from '@/data/regionsOfTaiwan';

export default {
  data() {
    return {
      tourismData: [],
      tourismThemes,
      regionsOfTaiwan,
      cityName: '',
    };
  },
  emits: ['emit-loading-status'],
  watch: {
    $route() {
      const { back, current } = window.history.state;
      if (this.$route.name === 'search' && back !== current) {
        this.getData();
        this.getCityName();
      }
    },
  },
  inject: [
    'getAuthorizationHeader',
    'showErrMessage',
  ],
  methods: {
    getCityName() {
      let city = '';
      if (this.$route.query.city !== '') {
        let arr = Object.values(this.regionsOfTaiwan);
        arr = arr.flat(1);
        const index = arr
          .findIndex((district) => this.$route.query.city === district.englishName);
        city = arr[index]?.city;
      }
      this.cityName = city;
    },
    getData() {
      let api = '';

      const searchQueriesCheck = this.$route.query.theme
        ?? this.$route.query.keywords
        ?? this.$route.query.city;

      if (this.$route.query.category) {
        const { category } = this.$route.query;
        const city = this.$route.query.city ?? '';
        api = `${process.env.VUE_APP_APIBASE}/${category}/${city}`;
      } else if (searchQueriesCheck) {
        const index = this.tourismThemes
          .findIndex((theme) => theme.themeName === this.$route.query.theme);
        const { category, query } = this.tourismThemes[index];

        const filterQuery = query === '' ? query : `?$filter=${query}`;
        api = `${process.env.VUE_APP_APIBASE}/${category + filterQuery}`;
      }

      if (api === '') {
        this.$router.push({
          name: 'home',
        });
      } else {
        this.$emit('emit-loading-status', true);
        this.$http.get(api, { headers: this.getAuthorizationHeader() })
          .then((res) => {
            /* this.tourismData = res.data; */
            console.log(res);
            this.$emit('emit-loading-status', false);
          }).catch(() => {
            this.$emit('emit-loading-status', false);
            this.showErrMessage();
          });
      }
    },
  },
  components: {
    PaginationComponent,
    CardList,
  },
  created() {
    this.getData();
    this.getCityName();
  },
};
</script>

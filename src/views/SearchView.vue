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

  <CardList v-if="tourismData.length" :cardData="curPageData" />
  <p v-else>沒有符合的搜尋結果，請試著換關鍵字在搜尋一次。</p>

  <PaginationComponent
    v-show="paginationData.totalPages > 1"
    :paginationData="paginationData"
    @changePage="getPageData"/>
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
      paginationData: {
        totalPages: 1,
        curPage: 1,
        hasPrePage: false,
        hasNextPage: false,
      },
    };
  },
  inject: [
    'getAuthorizationHeader',
    'showErrMessage',
  ],
  emits: ['emit-loading-status'],
  computed: {
    curPageData() {
      const page = this.paginationData.curPage;
      const startIndex = (page - 1) * 9;
      const endIndex = page * 9;
      const result = this.tourismData.filter((tourism, i) => i >= startIndex && i < endIndex);
      return result;
    },
  },
  watch: {
    $route() {
      const { back, current } = window.history.state;

      if (this.$route.name === 'search' && back !== current) {
        this.getData();
        this.getCityName();
      }
    },
    tourismData: {
      handler() {
        this.paginationData.totalPages = Math.ceil(this.tourismData.length / 9);
        this.getPageData();
      },
      deep: true,
    },
  },
  methods: {
    getCityName() {
      let city = '';
      if (this.$route.query.city !== '') {
        let citiesArr = Object.values(this.regionsOfTaiwan);
        citiesArr = citiesArr.flat(1);
        const index = citiesArr
          .findIndex((district) => this.$route.query.city === district.englishName);
        city = citiesArr[index]?.city;
      }
      this.cityName = city;
    },
    getData() {
      let api = '';

      if (this.$route.query.category) {
        const { category } = this.$route.query;
        const city = this.$route.query.city ?? '';
        api = `${process.env.VUE_APP_APIBASE}/${category}/${city}`;
      } else if (this.$route.query.theme) {
        const {
          theme,
          city,
          keywords,
        } = this.$route.query;

        const index = this.tourismThemes
          .findIndex((item) => item.themeName === theme);
        const { query, baseApi, category } = this.tourismThemes[index];

        const cityName = city === '' ? '' : `/${city}`;

        let filterQuery = '';
        if (query !== '' && keywords !== '') {
          filterQuery = `?$filter=${query} and contains(${category}Name, '${keywords}')`;
        } else if (query !== '' || keywords !== '') {
          const keywordsQuery = keywords === '' ? '' : `contains(${category}Name, '${keywords}')`;
          filterQuery = `?$filter=${query + keywordsQuery}`;
        }
        api = baseApi + cityName + filterQuery;
      }

      if (api === '') {
        this.$router.push({
          name: 'home',
        });
      } else {
        this.$emit('emit-loading-status', true);
        this.$http.get(api, { headers: this.getAuthorizationHeader() })
          .then((res) => {
            this.tourismData = res.data;
            this.$emit('emit-loading-status', false);
          }).catch(() => {
            this.$emit('emit-loading-status', false);
            this.showErrMessage();
          });
      }
    },
    getPageData(page = 1) {
      window.scrollTo(0, 0);
      this.paginationData.curPage = page;
      this.paginationData.hasPrePage = page > 1;
      this.paginationData.hasNextPage = page < this.paginationData.totalPages;
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

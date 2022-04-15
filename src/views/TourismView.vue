<template>
  <div class="flex justify-between mb-5">
    <div class="flex items-center">
      <button type="button"
        class="print-noPrint flex items-center justify-center h-8 w-8 hover:opacity-50"
        @click.prevent="$router.go(-1)">
        <i class="bi bi-chevron-left"></i>
      </button>
      <h3 class="text-xl font-bold ml-2">{{ tourismData[`${category}Name`] }}</h3>
    </div>
    <ul class="print-noPrint flex mr-6">
      <li>
        <button type="button"
          class="h-8 w-8 flex justify-center items-center hover:opacity-50"
          @click="printPage">
          <img src="../../public/images/fluent_print-24-filled.svg" alt="icon" />
        </button>
      </li>
      <li class="ml-3">
        <button type="button"
          class="h-8 w-8 flex justify-center items-center hover:opacity-50"
          @click="openShareLinkModal = !openShareLinkModal">
          <img src="../../public/images/clarity_share-solid.svg" alt="icon" />
        </button>
      </li>
    </ul>
  </div>

  <div class="h-91 overflow-hidden mb-6 rounded-xl bg-white flex items-center justify-center">
    <img class="object-cover"
      :src="tourismData.Picture?.PictureUrl1 ?? defaultImg"
      :alt="tourismData.Picture?.PictureDescription1 ?? tourismData[`${category}Name`]" />
  </div>

  <section class="rounded-lg bg-primary-op-8 py-4 px-5 mb-6">
    <ul class="grid grid-cols-1 gay-y-2">
      <li class="flex items-center">
        <img src="../../public/images/Location.svg" alt="icon" />
        <p class="ml-2">{{ tourismData.Address }}</p>
      </li>
      <li class="flex items-center"
        v-show="tourismData.OpenTime ?? tourismData.StartTime">
        <img src="../../public/images/Time_Circle.svg" alt="icon" />
        <p class="ml-2">
          <template v-if="tourismData.OpenTime">
            {{ tourismData.OpenTime }}
          </template>
          <template v-else>
            {{ formatTime(tourismData.StartTime) }} 至 {{ formatTime(tourismData.EndTime) }}
          </template>
        </p>
      </li>
      <li class="flex items-center">
        <img src="../../public/images/Calling.svg" alt="icon" />
        <p class="ml-2">{{ tourismData.Phone }}</p>
      </li>
    </ul>
  </section>

  <section class="mb-6" v-if="tourismData.DescriptionDetail ?? tourismData.Description">
    <h4 class="text-primary text-lg font-bold mb-4">景點介紹</h4>
    <p>{{ tourismData.DescriptionDetail ?? tourismData.Description }}</p>
  </section>

  <section class="mb-6" v-if="tourismData.TicketInfo">
    <h4 class="text-primary text-lg font-bold mb-4">門票資訊</h4>
    <p>{{ tourismData.TicketInfo }}</p>
  </section>

  <section class="mb-6" v-if="tourismData.ParkingInfo">
    <h4 class="text-primary text-lg font-bold mb-4">停車資訊</h4>
    <p>{{ tourismData.ParkingInfo }}</p>
  </section>

  <section class="print-noBreak mb-12" v-if="tourismData.Position">
    <h4 class="text-primary text-lg font-bold mb-4">地圖資訊</h4>
    <div class="bg-white h-70 w-full mb-4 rounded-lg">
      <MapComponent class="h-full"
        :tourismData="tourismData" />
    </div>
  </section>

  <section class="print-noPrint" v-if="recommendableTourism.length">
    <h4 class="text-primary text-lg font-bold mb-4">更多相關景點</h4>
    <CardList :cardData="recommendableTourism" />
  </section>
  <ShareLinkModal :class="{ hidden: !openShareLinkModal }"
    :tourismName="tourismData[`${category}Name`]"
    :shareUrl="shareUrl"
    @hideShareLinkModal="toggleShareLinkModal"/>
</template>

<script>
import CardList from '@/components/CardList.vue';
import ShareLinkModal from '@/components/ShareLinkModal.vue';
import MapComponent from '@/components/MapComponent.vue';
import shareLinkModalMixin from '@/mixins/shareLinkModalMixin';
import formatTime from '@/utils/formatTime';

export default {
  data() {
    return {
      defaultImg: 'https://raw.githubusercontent.com/calon719/2021_the_f2e_taiwan_travel/master/public/images/image_default.jpg',
      id: '',
      category: '',
      tourismData: {},
      otherTourismData: [],
    };
  },
  emits: ['emit-loading-status'],
  inject: [
    'getAuthorizationHeader',
    'filterData',
    'showErrMessage',
  ],
  mixins: [shareLinkModalMixin],
  watch: {
    $route() {
      const { back, current } = window.history.state;
      if (this.$route.name === 'tourism' && back !== current) {
        this.getData();
      }
    },
  },
  computed: {
    recommendableTourism() {
      const index = this.otherTourismData.findIndex((tourism) => this.filterData(tourism, 'ID') === this.id);
      const tourismData = this.otherTourismData.filter((item, i) => i !== index);

      const len = tourismData.length;
      const tourismNum = len >= 3 ? 3 : len;
      const randomNumArr = [];

      for (let i = 0; i < tourismNum; i += 1) {
        const randomNum = Math.floor(Math.random() * len);
        const check = randomNumArr.some((num) => randomNum === num);
        if (check) {
          i -= 1;
        } else {
          randomNumArr.push(randomNum);
        }
      }

      const resultArr = randomNumArr.map((i) => tourismData[i]);
      return resultArr;
    },
  },
  methods: {
    formatTime,
    getQuery() {
      const { data } = this.$route.query;
      const dataStrArr = data.split('-');
      [this.id, this.category] = dataStrArr;
    },
    async getData() {
      this.getQuery();
      const api = `${process.env.VUE_APP_APIBASE}/${this.category}`;
      const idKey = `${this.category}ID`;

      this.$emit('emit-loading-status', true);
      try {
        const tourismRes = await this.$http.get(
          `${api}?$filter=contains(${idKey},'${this.id}')&$format=JSON`,
          { headers: this.getAuthorizationHeader() },
        );
        this.tourismData = { ...tourismRes.data[0] };

        let cityNameArr = this.tourismData.Address.split('');
        cityNameArr = cityNameArr.splice(0, 2);
        const city = cityNameArr.join('');

        const otherTourismRes = await this.$http.get(
          `${api}?$filter=${idKey} ne '${this.id}' and startswith(Address, '${city}')&$format=JSON`,
          { headers: this.headerOptions },
        );
        this.otherTourismData = [...otherTourismRes.data];
      } catch {
        this.showErrMessage();
      }
      this.$emit('emit-loading-status', false);
    },
    goPrePage() {
      this.$router.go(-1);
    },
    printPage() {
      window.print();
    },
  },
  components: {
    CardList,
    ShareLinkModal,
    MapComponent,
  },
  created() {
    this.getData();
  },
  mounted() {
    this.shareUrl = window.location.href;
  },
};
</script>

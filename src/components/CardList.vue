<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-4 md:gap-x-6 mb-10">
    <li class="card shadow-default hover:shadow-lg rounded-2xl relative h-100
      transition-all duration-300"
      v-for="item in cardData" :key="filterData(item, 'ID')">
      <RouterLink
        :to="{ path: '/tourism', query: { id: filterData(item, 'ID'),
        category: getCategoryString(item) } }"
        class="block absolute inset-0 z-10" />
      <button type="button"
        class="absolute top-3 right-3 p-3 bg-primary-op-20 rounded-2xl hover:bg-primary z-20"
        @click="showShareLinkModal(item)">
        <img src="../../public/images/Vector-white.svg" alt="icon" />
      </button>
      <div class="h-41 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img :src="item?.Picture?.PictureUrl1 || defaultImg" alt=""
          class="card-top-img object-cover transtion-transform duration-300" />
      </div>
      <div class="bg-white py-2 px-4 sm:p-3 rounded-b-2xl text-sm text-gray-800">
        <h4 class="text-lg text-dark font-bold mb-2.5">{{ filterData(item, 'Name') }}</h4>
        <div class="flex items-center mb-2">
          <img src="../../public/images/Location.svg" alt="icon" />
          <p class="ml-2">{{ item.Address }}</p>
        </div>
        <div class="flex items-center mb-2"
          v-if="item.OpenTime || item.StartTime">
          <img src="../../public/images/Time_Circle.svg" alt="icon" />
          <p class="ml-2">
            <template v-if="item.OpenTime">
              {{ item.OpenTime }}
            </template>
            <template v-else>
              {{ formatTime(item.StartTime) }} 至 {{ formatTime(item.EndTime) }}
            </template>
          </p>
        </div>
        <div class="flex items-center mb-2">
          <img src="../../public/images/Calling.svg" alt="icon" />
          <p class="ml-2">{{ item.Phone }}</p>
        </div>
      </div>
    </li>
  </ul>
  <ShareLinkModal :class="{ hidden: !openShareLinkModal }"
    :tourismName="tourismName"
    :shareUrl="shareUrl"
    @hideShareLinkModal="toggleShareLinkModal"/>
</template>

<script>
import ShareLinkModal from '@/components/ShareLinkModal.vue';
import shareLinkModalMixin from '@/mixins/shareLinkModalMixin';

export default {
  data() {
    return {
      tourismName: '',
    };
  },
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
  inject: [
    'filterData',
    'formatTime',
    'defaultImg',
  ],
  mixins: [shareLinkModalMixin],
  methods: {
    getCategoryString(tourismData) {
      const keys = Object.keys(tourismData);
      const filteredKey = keys.find((key) => key.includes('ID'));
      const strArr = filteredKey.split('');
      strArr.splice(-2);
      const str = strArr.join('');
      return str;
    },
    showShareLinkModal(tourism) {
      const category = this.getCategoryString(tourism);
      const id = this.filterData(tourism, 'ID');
      this.shareUrl = `${process.env.VUE_APP_URL}/tourism?id=${id}&category=${category}`;
      this.tourismName = this.filterData(tourism, 'Name');
      this.openShareLinkModal = true;
    },
  },
  components: {
    ShareLinkModal,
  },
};
</script>

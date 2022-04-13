<template>
  <div class="flex justify-between mb-5">
    <div class="flex items-center">
      <a href="#"
        class="flex items-center justify-center h-8 w-8 hover:opacity-50"
        @click.prevent="goPrePage">
        <span class="material-icons-outlined">
          chevron_left
        </span>
      </a>
      <h3 class="text-xl font-bold ml-3">澄清湖</h3>
    </div>
    <ul class="flex mr-6">
      <li>
        <button type="button"
          class="h-8 w-8 flex justify-center items-center hover:opacity-50">
          <img src="../../public/images/fluent_print-24-filled.svg" alt="icon" />
        </button>
      </li>
      <li class="ml-3">
        <button type="button"
          class="h-8 w-8 flex justify-center items-center hover:opacity-50">
          <img src="../../public/images/clarity_share-solid.svg" alt="icon" />
        </button>
      </li>
    </ul>
  </div>

  <div
    class="h-91 overflow-hidden mb-6 rounded-xl"
    style="background-image: url('https://fakeimg.pl/1500x1500/');">
  </div>

  <section class="rounded-lg bg-primary-op-8 py-4 px-5 mb-6">
    <div class="flex items-center mb-2">
      <img src="../../public/images/Location.svg" alt="icon" />
      <p class="ml-2">高雄</p>
    </div>
    <div class="flex items-center mb-2">
      <img src="../../public/images/Time_Circle.svg" alt="icon" />
      <p class="ml-2">090909</p>
    </div>
    <div class="flex items-center mb-2">
      <img src="../../public/images/Calling.svg" alt="icon" />
      <p class="ml-2">090909</p>
    </div>
  </section>

  <section class="mb-6">
    <h4 class="text-primary text-lg font-bold mb-4">景點介紹</h4>
    <p>
      Corporis saepe.Elit veniam ea eaque ex perspiciatis Dignissimos beatae accusamus
      id autem incidunt.
      Velit eius veritatis qui odit eum eligendi eius Veniam cupiditate
      iure suscipit animi quia dolor temporibus.
      Corporis saepe.
    </p>
  </section>

  <section class="mb-6">
    <h4 class="text-primary text-lg font-bold mb-4">注意事項</h4>
    <p>
      Corporis saepe.Elit veniam ea eaque ex perspiciatis Dignissimos beatae accusamus
      id autem incidunt.
      Velit eius veritatis qui odit eum eligendi eius Veniam cupiditate
      iure suscipit animi quia dolor temporibus.
      Corporis saepe.
    </p>
  </section>

  <section class="mb-12">
    <h4 class="text-primary text-lg font-bold mb-4">交通方式</h4>
    <div class="bg-white h-70 w-full mb-4 rounded-lg">map</div>
    <p>【】</p>
    <p>
      Corporis saepe.Elit veniam ea eaque ex perspiciatis Dignissimos beatae accusamus
      id autem incidunt.
      Velit eius veritatis qui odit eum eligendi eius Veniam cupiditate
      iure suscipit animi quia dolor temporibus.
      Corporis saepe.
    </p>
  </section>

  <section>
    <h4 class="text-primary text-lg font-bold mb-4">更多相關景點</h4>
    <CardList :cardData="recommendableTourism" />
  </section>
</template>

<script>
import CardList from '@/components/CardList.vue';

export default {
  data() {
    return {
      otherTourismData: JSON.parse(localStorage.getItem('tourismData')),
    };
  },
  inject: ['filterData'],
  computed: {
    recommendableTourism() {
      const { id } = this.$route.params;
      const index = this.otherTourismData.findIndex((tourism) => this.filterData(tourism, 'ID') === id);
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
      console.log(resultArr);
      return resultArr;
    },
  },
  methods: {
    goPrePage() {
      this.$router.go(-1);
    },
  },
  components: {
    CardList,
  },
};
</script>

<template>
  <h3 class="text-2xl font-bold mb-4">高雄</h3>
  <div class="flex items-center mb-8">
    <img src="../../public/images/ic_baseline-sort.svg" alt="icon" />
    <ul class="grid grid-cols-5 gap-3 text-lg ml-4">
      <li>
        <button type="button"
          class="py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg">
          全部
        </button>
      </li>
      <li>
        <button type="button"
          class="py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg">
          觀光
        </button>
      </li>
      <li>
        <button type="button"
          class="py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg">
          餐飲
        </button>
      </li>
      <li>
        <button type="button"
          class="py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg">
          旅宿
        </button>
      </li>
      <li>
        <button type="button"
          class="py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white
          rounded-lg">
          活動
        </button>
      </li>
    </ul>
  </div>

  <CardList />

  <div class="flex justify-center">
    <PaginationComponent />
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';
import CardList from '@/components/CardList.vue';

export default {
  components: {
    PaginationComponent,
    CardList,
  },
};
</script>

<template>
  <section>
    <div class="flex items-center mb-4">
      <img src="../../public/images/Location-1.svg" alt="icon">
      <h3 class="text-xl font-bold ml-3">{{ theme }}</h3>
      <RouterLink
        :to="{ path: '/search', query: { category } }"
        class="hidden sm:inline text-primary ml-auto hover:underline
        underline-offset-1">更多{{ theme }}</RouterLink>
    </div>

    <CardList :cardData="tourismData" />

    <RouterLink
      :to="{ path: '/search', query: { category } }"
      class="block text-center sm:hidden text-primary ml-auto hover:underline
      underline-offset-1">更多{{ theme }}</RouterLink>
  </section>
</template>

<script>
import CardList from '@/components/CardList.vue';

export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tourismData: {
      type: Array,
      required: true,
    },
  },
  components: {
    CardList,
  },
};
</script>

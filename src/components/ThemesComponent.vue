<template>
  <section>
    <div class="flex items-center mb-4">
      <img src="../../public/images/Location-1.svg" alt="icon">
      <h3 class="text-xl font-bold ml-3">{{ theme }}</h3>
      <routerLink to="/"
        class="hidden sm:inline text-primary ml-auto hover:underline
        underline-offset-1">更多{{ theme }}</routerLink>
    </div>

    <CardList />

    <routerLink to="/"
      class="block text-center sm:hidden text-primary ml-auto hover:underline
      underline-offset-1">更多{{ theme }}</routerLink>
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
  },
  components: {
    CardList,
  },
};
</script>

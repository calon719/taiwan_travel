<template>
  <ul class="px-3 grid grid-cols-3 gap-x-6 gap-y-3">
    <li v-for="district in regionsData[region]" :key="district.englishName">
      <button type="button"
        class="border border-primary rounded-lg py-1.5 w-full
        hover:bg-primary hover:text-white">
        {{ district.city }}
      </button>
    </li>
  </ul>
</template>

<script>
import regionsData from '@/data/regionsOfTaiwan';

export default {
  data() {
    return {
      regionsData,
    };
  },
  props: {
    region: {
      type: String,
      required: true,
    },
  },
};
</script>

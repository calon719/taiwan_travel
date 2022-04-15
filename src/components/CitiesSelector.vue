<template>
  <ul class="px-3 grid grid-cols-3 gap-x-6 gap-y-3">
    <li v-for="district in regionsOfTaiwan[region]"
      :key="district.englishName">
      <button type="button"
        class="border border-primary rounded-lg py-1.5 w-full
        hover:bg-primary hover:text-white"
        :class="selectedCity === district.city ? 'bg-primary text-white' : ''"
        @click="selectCity(district)">
        {{ district.city }}
      </button>
    </li>
  </ul>
</template>

<script>
import regionsOfTaiwan from '@/data/regionsOfTaiwan';

export default {
  data() {
    return {
      regionsOfTaiwan,
      selectedCity: '',
    };
  },
  props: {
    region: {
      type: String,
      required: true,
    },
  },
  watch: {
    $route() {
      this.selectedCity = '';
    },
  },
  methods: {
    selectCity(district) {
      this.selectedCity = district.city;
      this.$emit('emit-city', district);
    },
  },
};
</script>

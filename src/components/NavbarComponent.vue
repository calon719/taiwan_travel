<template>
  <div class="py-2 sm:py-4 px-4 sm:px-6 lg:px-0 text-lg overflow-auto grow">
    <div class="bg-gray-300 pt-2.5 pb-1 px-3 border border-gray-500 rounded-lg mb-3
      flex justify-between">
      <div>
        <span class="text-gray-600"
          v-show="!selectedCity.city">選擇目的地</span>
        <div class="flex flex-row-reverse justify-end align-center"
          v-show="selectedCity.city">
          <button type="button" class="select-delBtn ml-1 hover:opacity-75"
            @click="selectedCity = {}">
            <i class="bi bi-x-lg"></i>
          </button>
          <span>{{ selectedCity.city }}</span>
        </div>
      </div>
      <div>
        <button type="button"
          class="select-btn w-full hover:opacity-50"
          :class="{ active: showSelectMenu }"
          @click="showSelectMenu = !showSelectMenu">
          <img src="../../public/images/arrow_down_circle.svg" alt="icon"
            class="transition-transform duration-300 ml-auto" />
        </button>
      </div>
    </div>

    <section class="mb-3 overflow-hidden transition-all duration-300"
      :class="showSelectMenu ? 'h-47' : 'h-0'">
      <ul class="flex justify-around mb-3 text-base text-center whitespace-nowrap overflow-x-auto">
        <li>
          <button type="button"
            class="px-2 border-b-2 hover:border-primary"
            :class="region === 'north' ? 'border-primary' : 'border-transparent'"
            @click="region = 'north'"
          >北部</button>
        </li>
        <li>
          <button type="button"
            class="px-2 border-b-2 hover:border-primary"
            :class="region === 'center' ? 'border-primary' : 'border-transparent'"
            @click="region = 'center'"
          >中部</button>
        </li>
        <li>
          <button type="button"
            class="px-2 border-b-2 hover:border-primary"
            :class="region === 'south' ? 'border-primary' : 'border-transparent'"
            @click="region = 'south'"
          >南部</button>
        </li>
        <li>
          <button type="button"
            class="px-2 border-b-2 hover:border-primary"
            :class="region === 'others' ? 'border-primary' : 'border-transparent'"
            @click="region = 'others'"
          >東部、離島</button>
        </li>
      </ul>
      <CitiesSelector :region="region" @emitCity="selectCity" />
    </section>

    <label for="search">
      <input id="search" type="text" placeholder="搜尋關鍵字"
        class="searchInput border border-gray-500 rounded-lg
        px-3 pt-2 pb-2 mb-3 w-full bg-gray-300"
        v-model.trim="searchQueries.keywords"/>
    </label>

    <section>
      <h3 class="text-lg font-semibold mb-3">精選主題（必填）</h3>
      <ul class="text-base grid grid-cols-2 gap-x-4 gap-y-3">
        <li v-for="theme in tourismThemes"
          :key="theme.themeName">
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border hover:border-primary rounded-lg"
            :class="searchQueries.theme === theme.themeName
              ? 'border-primary'
              : 'border-transparent'"
            @click.prevent="toggleThemeSelect(theme.themeName)">
            <div
              class="h-17.5 w-17.5 flex justify-center items-center rounded-full"
              :class="theme.color">
              <i class="text-icon text-white" :class="theme.icon"></i>
            </div>
            {{ theme.themeName }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import CitiesSelector from '@/components/CitiesSelector.vue';
import tourismThemes from '@/data/tourismThemes';

export default {
  data() {
    return {
      showSelectMenu: false,
      region: 'north',
      searchQueries: {
        city: '',
        keywords: '',
        theme: '',
      },
      selectedCity: {},
      tourismThemes,
    };
  },
  watch: {
    selectedCity() {
      this.searchQueries.city = this.selectedCity.englishName ?? '';
    },
    searchQueries: {
      handler() {
        this.$emit('emit-search-queries', this.searchQueries);
      },
      deep: true,
    },
    $route() {
      this.selectedCity = {};
      this.showSelectMenu = false;
      this.searchQueries = {
        city: '',
        keywords: '',
        theme: '',
      };
    },
  },
  methods: {
    selectCity(district) {
      this.selectedCity = district;
    },
    toggleThemeSelect(theme) {
      if (this.searchQueries.theme === theme) {
        this.searchQueries.theme = '';
      } else {
        this.searchQueries.theme = theme;
      }
    },
  },
  components: {
    CitiesSelector,
  },
};
</script>

<style scoped>
.searchInput {
  background-image: url('/public/images/Search.svg');
  background-repeat: no-repeat;
  background-position: right 14px center;
}
.select-btn.active img{
  transform: rotate(180deg);
}
.select-delBtn:hover + span {
  opacity: .75;
}
</style>

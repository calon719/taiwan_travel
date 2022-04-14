<template>
  <div class="py-2 sm:py-4 px-4 sm:px-6 lg:px-0 text-lg overflow-auto grow">
    <div class="bg-gray-300 pt-2.5 px-3 border border-gray-500 rounded-lg mb-3
      flex justify-between">
      <div>
        <span class="text-gray-600">選擇目的地</span>
        <div class="flex flex-row-reverse justify-end align-center mb-1">
          <button type="button" class="select-delBtn ml-1 hover:opacity-75">
            <i class="bi bi-x-lg"></i>
          </button>
          <span>1234</span>
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
            class="px-2 border-b-2 border-transparent hover:border-primary"
            :class="region === 'center' ? 'border-primary' : 'border-transparent'"
            @click="region = 'center'"
          >中部</button>
        </li>
        <li>
          <button type="button"
            class="px-2 border-b-2 border-transparent hover:border-primary"
            :class="region === 'south' ? 'border-primary' : 'border-transparent'"
            @click="region = 'south'"
          >南部</button>
        </li>
        <li>
          <button type="button"
            class="px-2 border-b-2 border-transparent hover:border-primary"
            :class="region === 'others' ? 'border-primary' : 'border-transparent'"
            @click="region = 'others'"
          >東部、離島</button>
        </li>
      </ul>
      <CitiesSelector :region="region" />
    </section>

    <label for="search">
      <input id="search" type="text" placeholder="搜尋關鍵字"
        class="searchInput border border-gray-500 rounded-lg
        px-3 pt-2 pb-2 mb-3 w-full bg-gray-300" />
    </label>

    <section>
      <h3 class="text-lg font-semibold mb-6">精選主題</h3>
      <ul class="text-base grid grid-cols-2 gap-x-4 gap-y-3">
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-primary h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-zeelandia text-icon text-white"></i>
            </div>
            歷史文化
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-violet h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-youbike text-icon text-white"></i>
            </div>
            戶外踏青
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-rose h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-xingtian-tmp text-icon text-white"></i>
            </div>
            宗教巡禮
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-cyan h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-sky-lantern text-icon text-white"></i>
            </div>
            親子活動
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-blue h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-queens-head text-icon text-white"></i>
            </div>
            風景區
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-orange h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-tapioca text-icon text-white"></i>
            </div>
            美食品嚐
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-amber h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-grand-hotel text-icon text-white"></i>
            </div>
            住宿推薦
          </a>
        </li>
        <li>
          <a href="#"
            class="flex flex-col justify-center items-center py-2
            border border-transparent hover:border-primary rounded-lg">
            <div
              class="bg-icon-green h-17.5 w-17.5 flex justify-center items-center rounded-full">
              <i class="twicon-balloon text-icon text-white"></i>
            </div>
            觀光活動
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import CitiesSelector from '@/components/CitiesSelector.vue';

export default {
  data() {
    return {
      showSelectMenu: false,
      region: 'north',
    };
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

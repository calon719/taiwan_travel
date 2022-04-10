<template>
  <div class="py-2 px-4 lg:px-6 text-lg overflow-auto grow">
    <div class="bg-gray-300 pt-2.5 px-3 border border-gray-500 rounded-lg mb-3
      grid grid-cols-7">
      <div class="col-span-6">
        <span class="text-gray-600">選擇目的地</span>
        <ul class="flex flex-wrap">
          <li class="flex flex-row-reverse align-center mb-1">
            <button type="button" class="select-delBtn ml-1 hover:opacity-75">
              <span class="material-icons-outlined mt-0.5 text-gray-800">
                close
              </span>
            </button>
            <span>1234</span>
          </li>
        </ul>
      </div>
      <div class="text-right">
        <button type="button" @click="showSelectMenu = !showSelectMenu"
          class="select-btn w-full" :class="{ active: showSelectMenu }">
          <img src="../../public/images/arrow_down_circle.svg" alt="icon"
            class="transition-transform ml-auto" />
        </button>
      </div>
    </div>

    <ul class="px-3 mb-3 grid grid-cols-3 gap-x-6 gap-y-3">
      <li>
        <button type="button"
          class="border border-primary rounded-lg py-1.5 w-full
          hover:bg-primary hover:text-white">
          高雄
        </button>
      </li>
    </ul>

    <label for="search">
      <input id="search" type="text" placeholder="搜尋關鍵字"
        class="searchInput border border-gray-500 rounded-lg
        px-3 pt-2 pb-2 mb-3 w-full bg-gray-300" />
    </label>

    <section>
      <h3 class="text-lg font-semibold mb-6">精選主題</h3>
      <ul class="grid grid-cols-2 gap-x-4 gap-y-3">
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
export default {
  data() {
    return {
      showSelectMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
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

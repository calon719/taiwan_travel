<template>
  <header class="sticky top-0 inset-x-0 z-50 bg-white lg:hidden">
    <nav class="py-2 px-4 border-b border-gray-500">
      <button type="button"
        class="bg-primary-op-20 p-2 rounded-lg hover:opacity-75"
        @click="showTopMenu = !showTopMenu">
        <img src="../public/images/carbon_settings-adjust.svg" alt="選單圖示">
      </button>
      <routerLink to="/"
        class="logo-link absolute h-10 top-2 right-1/2 translate-x-1/2">
        <h1>TAIWAN TRAVEL</h1>
      </routerLink>

      <div
        class="topMenu fixed bottom-0 inset-x-0 flex flex-col overflow-hidden bg-white
        z-40 transition-all duration-300"
        :class="showTopMenu ? 'show' : 'h-0'">
        <NavbarComponent />
        <div class="py-2 px-4">
          <button type="button"
            class="bg-primary text-lg text-center text-white
            w-full py-2.5 rounded-lg hover:opacity-75"
          >開始搜尋</button>
        </div>
      </div>
    </nav>
  </header>

  <div class="grid grid-cols-10">
    <nav class="hidden lg:block sticky top-0 left-0 h-screen bg-white py-10
      shadow-default overflow-y-auto lg:col-span-3 2xl:col-span-2 px-6">
      <routerLink to="/" class="logo-link block h-12 mb-6">
        <h1>TAIWAN TRAVEL</h1>
      </routerLink>
      <NavbarComponent class="w-full" />
      <button type="button"
        class="bg-primary text-center text-white text-lg
        w-full py-2.5 rounded-lg hover:opacity-75"
      >開始搜尋</button>
    </nav>

    <div class="col-span-10 lg:col-span-7 2xl:col-span-8">
      <main
        class="bg-gray-300 px-4 md:px-6 pt-6 md:pt-10 pb-20
        min-h-footer-bottom sm:min-h-footer-bottom-sm  lg:min-h-footer-bottom-lg">
        <routerView />
      </main>

      <footer class="bg-primary text-white text-center py-2">
        <div class="container w-full mx-auto grid grid-cols-1 sm:grid-cols-3">
          <routerLink to="/"
            class="flex items-center font-semibold h-full px-4 py-2
            text-right sm:text-center">
            <h2>TAIWAN TRAVEL</h2>
          </routerLink>
          <div class="text-left">
            <p>
              UI 設計師：
              <a href="https://www.figma.com/file/fnHynjl6HHHCcqay2C4KVn/2021-THE-F2E--Week1?node-id=5%3A2"
                class="underline">jhen</a>
            </p>
            <p>
              前端：
              <a href="https://github.com/calon719/2021_the_f2e_taiwan_travel"
                class="underline">Calon</a>
            </p>
          </div>
          <div class="flex justify-end items-center">
            <p>
              API 資料：
              <a href="https://tdx.transportdata.tw/"
                class="underline">交通部 PTX 服務平臺</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  data() {
    return {
      showTopMenu: false,
    };
  },
  watch: {
    $route() {
      this.showTopMenu = false;
    },
  },
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss" scoped>
.logo-link {
  background-image: url('../public/images/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
.topMenu {
  top: 57px;
  &.show {
    height: calc(100vh - 56px);
  }
}
</style>

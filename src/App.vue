<template>
  <header>
    <nav class="sticky top-0 inset-x-0 relative shadow-mini py-2 px-4 lg:hidden">
      <button type="button" class="bg-primary-200 p-2 rounded-lg hover:opacity-75">
        <img src="../public/images/carbon_settings-adjust.svg" alt="選單圖示">
      </button>
      <routerLink to="/"
        class="logo-link absolute h-10 top-2 right-1/2 translate-x-1/2">
        <h1>TAIWAN TRAVEL</h1>
      </routerLink>

      <div class="fixed top-14 bottom-0 inset-x-0 flex flex-col max-h-0 overflow-hidden">
        <NavbarComponent />
        <div class="py-2 px-4">
          <button type="button"
            class="bg-primary text-center text-white w-full py-2.5 rounded-lg hover:opacity-75"
          >開始搜尋</button>
        </div>
      </div>
    </nav>
  </header>

  <div class="grid grid-cols-10">
    <nav class="hidden lg:block sticky top-0 left-0 h-screen bg-white py-10
      shadow-default overflow-y-auto lg:col-span-3 2xl:col-span-2">
      <routerLink to="/" class="logo-link block h-12 mx-6 mb-6">
        <h1>TAIWAN TRAVEL</h1>
      </routerLink>
      <NavbarComponent class="w-full" />
    </nav>

    <div class="col-span-10 lg:col-span-7 2xl:col-span-8">
      <routerView />

      <footer class="bg-primary text-white text-center py-2">
        <div class="container flex items-center justify-between w-full mx-auto">
          <routerLink to="/" class="block font-semibold h-full px-4">
            <h2>TAIWAN TRAVEL</h2>
          </routerLink>
          <div class="text-left">
            <p>UI 設計師：jhen</p>
            <p>前端：Calon</p>
          </div>
          <p>API 資料：交通部 PTX 服務平臺</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>
.logo-link {
  background-image: url('../public/images/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
</style>

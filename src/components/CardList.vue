<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-4 md:gap-x-6 mb-10">
    <li class="card shadow-default rounded-2xl relative h-100">
      <routerLink to="/tourism" class="block absolute inset-0 z-10" />
      <button type="button"
        class="absolute top-3 right-3 p-3 bg-primary-op-20 rounded-2xl hover:bg-primary z-20">
        <img src="../../public/images/Vector-white.svg" alt="icon" />
      </button>
      <div class="h-41 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img src="https://fakeimg.pl/500x300/" alt=""
          class="card-top-img object-cover transtion-transform duration-300" />
      </div>
      <div class="bg-white py-2 px-4 sm:p-3 rounded-b-2xl text-sm text-gray-800">
        <h4 class="text-lg text-dark font-bold mb-2.5">高雄</h4>
        <div class="flex items-center mb-2">
          <img src="../../public/images/Location.svg" alt="icon" />
          <p class="ml-2">高雄</p>
        </div>
        <div class="flex items-center mb-2">
          <img src="../../public/images/Time_Circle.svg" alt="icon" />
          <p class="ml-2">090909</p>
        </div>
        <div class="flex items-center mb-2">
          <img src="../../public/images/Calling.svg" alt="icon" />
          <p class="ml-2">090909</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<template>
  <section>
    <div class="flex items-center mb-4">
      <img src="../../public/images/Location-1.svg" alt="icon">
      <h3 class="text-xl font-bold ml-3">{{ theme }}</h3>
      <a href="#" class="hidden sm:inline text-primary ml-auto hover:underline
        underline-offset-1">更多觀光活動</a>
    </div>
    <ul
      class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-4 md:gap-x-6 mb-6">
      <li class="shadow-default rounded-xl relative">
        <button type="button"
          class="absolute top-3 right-3 p-3 bg-primary-op-20 rounded-xl hover:opacity-75">
          <img src="../../public/images/Vector-white.svg" alt="icon" />
        </button>
        <div class="aspect-video sm:aspect-4x3 overflow-hidden">
          <img src="https://fakeimg.pl/700x700/" alt=""
            class="object-cover rounded-t-xl" />
        </div>
        <div class="bg-white py-2 px-4 sm:p-3 rounded-b-xl">
          <h4 class="text-lg font-bold mb-2.5">高雄</h4>
          <div class="flex items-center mb-2">
            <img src="../../public/images/Calling.svg" alt="icon" />
            <p class="text-sm text-gray-800 ml-2">090909</p>
          </div>
          <div class="flex items-center mb-2">
            <img src="../../public/images/Time_Circle.svg" alt="icon" />
            <p class="text-sm text-gray-800 ml-2">090909</p>
          </div>
          <div class="flex items-center mb-2">
            <img src="../../public/images/Location.svg" alt="icon" />
            <p class="text-sm text-gray-800 ml-2">高雄</p>
          </div>
        </div>
      </li>
    </ul>
    <a href="#" class="block text-center sm:hidden text-primary ml-auto hover:underline
      underline-offset-1">更多觀光活動</a>
  </section>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
};
</script>

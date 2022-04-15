<template>
  <div href="#"
    class="bg-dark-op-30 fixed inset-0 flex items-center justify-center z-50"
    data-js="modalContainer" :onclick="checkEl">
    <div class="bg-white rounded-xl pb-5 pt-12 px-10 m-4 relative">
      <button type="button" class="hover:opacity-75 absolute top-4 right-5"
        @click="hideModal">
        <i class="bi bi-x-lg"></i>
      </button>
      <h3 class="text-xl font-bold mb-4">
        分享 <span class="underline">{{ this.tourismName }}</span> 至...
      </h3>
      <ul
        class="text-white text-lg whitespace-nowrap text-center flex flex-col items-center">
        <li class="mb-3">
          <a target="_blank"
            class="bg-fb block rounded px-3 py-1 hover:opacity-75 w-32"
            :href="`https://www.facebook.com/sharer.php?u=${shareUrl}/`">
            <i class="bi bi-facebook"></i>
            <span class="ml-1">Facebook</span>
          </a>
        </li>
        <li class="mb-3">
          <a target="_blank"
            class="block bg-twitter rounded px-3 py-1 hover:opacity-75 w-32"
            :href="`https://twitter.com/share?url=${shareUrl}&text=Trave Taiwan ${tourismName}/`">
            <i class="bi bi-twitter"></i>
            <span class="ml-1">Twitter</span>
          </a>
        </li>
        <li>
          <a target="_blank"
            class="block bg-line rounded px-3 py-1 hover:opacity-75 w-32"
            :href="`http://line.naver.jp/R/msg/text/?${shareUrl}/`">
            <i class="bi bi-line"></i>
            <span class="ml-1">Line</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tourismName: {
      type: String,
    },
    shareUrl: {
      type: String,
      requird: true,
    },
  },
  methods: {
    hideModal() {
      this.$emit('hide-share-link-modal', false);
    },
    checkEl(e) {
      if (e.target.dataset.js) {
        this.hideModal();
      }
    },
  },
};
</script>

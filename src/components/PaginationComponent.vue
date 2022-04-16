<template>
  <ul class="flex justify-center">
    <li>
      <button type="button"
        class="pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white
        flex justify-center items-center transition-all duration-300"
        :disabled="paginationData.curPage === 1"
        @click="$emit('change-page', 1)">
        <i class="bi bi-chevron-bar-left"></i>
      </button>
    </li>
    <li class="ml-3">
      <button type="button"
        class="pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white
        flex justify-center items-center transition-all duration-300"
        :disabled="!paginationData.hasPrePage"
        @click="$emit('change-page', paginationData.curPage - 1)">
        <i class="bi bi-chevron-left"></i>
      </button>
    </li>
    <li class="h-11 w-11 flex justify-center items-center ml-3">
      {{ paginationData.curPage }}
    </li>
    <li class="ml-3">
      <button type="button"
        class="pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white
        flex justify-center items-center transition-all duration-300"
        :disabled="!paginationData.hasNextPage"
        @click="$emit('change-page', paginationData.curPage + 1)">
        <i class="bi bi-chevron-right"></i>
      </button>
    </li>
    <li class="ml-3">
      <button type="button"
        class="pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white
        flex justify-center items-center transition-all duration-300"
        :disabled="paginationData.curPage === paginationData.totalPages"
        @click="$emit('change-page', paginationData.totalPages)">
        <i class="bi bi-chevron-bar-right"></i>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    paginationData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-btn:disabled {
  opacity: .5;
  &:hover {
    background-color: transparent;
    color: #222222;
  }
}
</style>

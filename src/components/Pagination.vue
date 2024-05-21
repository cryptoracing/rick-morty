<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      this.$emit('change-page', this.currentPage - 1);
    },
    nextPage() {
      this.$emit('change-page', this.currentPage + 1);
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 20px;
}

button {
  margin: 0 5px;
}
</style>

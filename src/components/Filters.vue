<template>
    <div class="filters">
        <input type="text" v-model="nameFilter" placeholder="Name" />
        <select v-model="statusFilter">
            <option value="">All Statuses</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button @click="applyFilters">Apply</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      nameFilter: '',
      statusFilter: ''
    };
  },
  methods: {
    applyFilters() {
      const filters = {};
      if (this.nameFilter) {
        filters.name = this.nameFilter;
      }
      if (this.statusFilter) {
        filters.status = this.statusFilter;
      }
      this.$emit('apply-filters', filters);
    }
  }
};
</script>

<style scoped>
    .filters {
        margin-bottom: 20px;
    }

    input, select, button {
        margin-right: 10px;
    }
</style>

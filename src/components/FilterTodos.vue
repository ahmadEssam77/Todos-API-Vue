<template>
  <div>
      <label for="">Filter Todos:</label>
      <select @change="onChange" v-model="limit">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "FilterTodos",
    data() {
        return {
            limit: 200,
        }
    },
    methods: {
        ...mapActions(["filterTodos"]),
        onChange() {
            this.filterTodos(this.limit);
        }
    }
        
}
</script>

<style scoped>
div {
    margin: 10px 0;
}

label {
    margin-right: 5px;
}

</style>
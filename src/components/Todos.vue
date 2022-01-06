<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        <p>{{ todo.title }}</p>
        <p @click="deleteTodo(todo.id)"><i class="fas fa-trash"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["allTodos"]), // computed a value that depends on another values, like observable!
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  background-color: lightseagreen;
  padding: 5px 25px;
  border-radius: 3px;
  /* text-align: center; */
  /* cursor: pointer; */
  position: relative;
  display: flex;
  justify-content: space-between;
}

p:nth-of-type(2) {
  cursor: pointer;
}
</style>

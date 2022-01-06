<template>
  <div>
    <h3>Add todo</h3>
    <div class="add-notes">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Note..." />
        <input type="submit" value="Add Note" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);

      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 11;
  padding: 10px;
  border: 1px solid lightseagreen;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background-color: lightseagreen;
  border: 1px solid lightseagreen;
  cursor: pointer;
}
</style>

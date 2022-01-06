import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos, // state == hambozo
};

const actions = {
  // Get All todos from placeholder API
  async fetchTodos({ commit }) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    commit("setTodos", response.data); // commit(mutation, API data)
  },
  // Add todo
  async addTodo({ commit }, title) {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  // Delete Todo
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("deleteTodo", id);
  },
  // Filter Todos
  async filterTodos({ commit }, limit) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    // const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    commit("filterTodos", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  filterTodos: (state, todos) => (state.todos = todos),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

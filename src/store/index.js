import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",
    updatedTodo: "",
    complete: [],
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false,
      });
    },
    EDIT_TODO(state, todo) {
      let todos = state.todos;
      todos.splice(todos.indexOf(todo, 1));
      state.todos = todos;
      state.newTodo = todo.body;
    },
    REMOVE_TODO(state, todo) {
      let todos = state.todos;
      let completes = state.complete;
      todos.splice(todos.indexOf(todo), 1);
      state.complete.splice(completes.indexOf(todo));
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed;
      let completes = state.complete;
      if (!todo.completed) {
        completes.splice(completes.indexOf(todo));
      } else if (todo.completed && completes.indexOf(todo) == -1) {
        state.complete.push(todo);
      }
    },
    CLEAR_TODO(state) {
      state.newTodo = "";
    },
    CLEAR_COMPLETES(state) {
      let todos = state.todos;
      let completes = state.complete;
      completes.forEach((todo) => {
        todos.splice(todos.indexOf(todo), 1);
      });
      state.todos = todos;
      state.complete = [];
    },
    GET_UPDATED_TODO(state, todo) {
      state.updatedTodo = todo;
    },
    UPDATE_TODO(state, todo) {
      let todos = state.todos;
      todos[todos.indexOf(todo)].body = state.updatedTodo;
      state.todos = todos;
      state.updatedTodo = "";
    },
  },

  actions: {
    getTodo({ commit }, todo) {
      commit("GET_TODO", todo);
    },
    addTodo({ commit }) {
      commit("ADD_TODO");
    },
    editTodo({ commit }, todo) {
      commit("EDIT_TODO", todo);
    },
    removeTodo({ commit }, todo) {
      commit("REMOVE_TODO", todo);
    },
    completeTodo({ commit }, todo) {
      commit("COMPLETE_TODO", todo);
    },
    clearTodo({ commit }) {
      commit("CLEAR_TODO");
    },
    clearCompletes({ commit }) {
      commit("CLEAR_COMPLETES");
    },
    getUpdatedTodo({ commit }, todo) {
      commit("GET_UPDATED_TODO", todo);
    },
    updateTodo({ commit }, todo) {
      commit("UPDATE_TODO", todo);
    },
  },
  getters: {
    newTodo: (state) => state.newTodo,
    todos: (state) =>
      state.todos.filter((todo) => {
        return !todo.completed;
      }),
    allTodos: (state) => state.todos,

    completedTodos: (state) =>
      state.todos.filter((todo) => {
        return todo.completed;
      }),
    activeTodos: (state) =>
      state.todos.filter((todo) => {
        return todo.completed == false;
      }),
  },
  modules: {},
});

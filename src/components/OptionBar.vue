<template>
  <div class="border mt-3 option ">
    <div class="row">
      <div class="col-lg-3">
        <span class="font-italic text-left">{{ todos.length }} items left</span>
      </div>
      <div class="col-12 col-lg-6 ">
        <router-link type="button" class="btn btn-sm btn-info " to="/"
          >All</router-link
        >
        <router-link type="button" class="btn btn-sm btn-info ml-2" to="/active"
          >Active</router-link
        >
        <router-link
          type="button"
          class="btn btn-sm btn-info ml-2"
          to="/complete"
          >Completed</router-link
        >
      </div>
      <div class="col-lg-3 mt-2">
        <div
          class="btn btn-sm btn-warning"
          @click="clearAllCompletes()"
          v-if="clearCompletedShow"
        >
          Clear Completed
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearAllCompletes() {
      this.$store.dispatch("clearCompletes");
    },
  },

  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    clearCompletedShow() {
      return this.$store.getters.completedTodos.length;
    },
  },
};
</script>

<style scoped>
.option {
  height: fit-content;
  padding: 12px;
}
</style>

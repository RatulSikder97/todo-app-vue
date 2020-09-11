<template>
  <div class="p-2">
    <div class="form-group ">
      <input
        class="form-control  mt-3"
        :value="newTodo"
        @change="getTodo"
        @keyup.enter="addTodo"
        placeholder="What need to be done?"
        style="height:50px"
        id="todoInput"
      />
      <small id="helpId" class="text-muted font-italic "
        >Click Enter to add todo to todos list.</small
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getTodo(e) {
      this.$store.dispatch("getTodo", e.target.value);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
      this.$store.dispatch("clearTodo");
    },
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
  },
};
</script>

<style></style>

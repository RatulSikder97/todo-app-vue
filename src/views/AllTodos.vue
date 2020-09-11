<template>
  <div>
    <div id="current-todos" class="m-2">
      <ul class="list-group ">
        <li class="list-group-item mt-2 " v-for="(todo, i) in todos" :key="i">
          <div class="d-flex list ">
            <span v-if="todo.completed" @click="complete(todo)">
              <i class="fa fa-circle text-success h1" aria-hidden="true"></i>
            </span>
            <span v-else @click="complete(todo)">
              <i class="fa fa-circle-o text-info h1" aria-hidden="true"></i>
            </span>

            <div class="input-group mycustom ml-3  mb-3 ">
              <span
                :class="{ del: todo.completed }"
                class="overflow-auto mt-2 h4 pt-1"
                v-if="!todo.edit"
                @click="todo.edit = !todo.edit"
                >{{ todo.body }}</span
              >
              <input
                type="text"
                :value="todo.body"
                :disabled="todo.completed"
                class="form-control w-80 border h4 rounded"
                style="height:fit-content"
                @change="getUpdated"
                @keyup.enter="$event.target.blur()"
                @blur="updateTodo(todo)"
                v-if="todo.edit"
              />
              <div class="input-group-prepend">
                <button
                  class="btn border-0 btn-outline-secondary"
                  type="button"
                  @click="remove(todo)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getTodo(e) {
      this.$store.dispatch("getTodo", e.target.value);
    },
    getUpdated(e) {
      this.$store.dispatch("getUpdatedTodo", e.target.value);
    },

    updateTodo(todo) {
      todo.edit = !todo.edit;
      this.$store.dispatch("updateTodo", todo);
    },
    complete(todo) {
      this.$store.dispatch("completeTodo", todo);
    },
    remove(todo) {
      this.$store.dispatch("removeTodo", todo);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
      this.$store.dispatch("clearTodo");
    },
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
  },
};
</script>
<style scoped>
.btn-group {
  float: right;
}
.del {
  text-decoration: line-through;
  color: #aaa;
}

.mycustom {
  position: relative;
}
.mycustom input[type="text"] {
  border: none;
  width: 100%;
  padding-right: 123px;
  font-size: 20px;
}
.mycustom .input-group-prepend {
  display: none;
  position: absolute;
  right: 4px;
  top: 4px;
  bottom: 4px;
  z-index: 9;
}
.list {
  margin-top: 12px;
}
.list:hover .input-group-prepend {
  display: block;
}
</style>

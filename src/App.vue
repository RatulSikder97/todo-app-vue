<template>
  <div id="app">
    <div class="display-3 bg-dark text-success text-center">TODOS</div>
    <div class="main-view w-80 m-5">
      <!-- Input -->
      <InputTodo></InputTodo>
      <!-- Route pages -->
      <router-view></router-view>
      <!-- optionbar -->
      <div v-if="barshow"><OptionBar></OptionBar></div>
    </div>
  </div>
</template>
<script>
import OptionBar from "@/components/OptionBar";
import InputTodo from "@/components/InputTodo";
export default {
  components: {
    OptionBar,
    InputTodo,
  },
  computed: {
    barshow() {
      return (
        this.$store.getters.todos.length ||
        this.$store.getters.completedTodos.length
      );
    },
  },
};
</script>
<style>
@import url("/font-awesome-4.7.0/css/font-awesome.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.main-view {
  box-shadow: 2px 2px 3px #03c78c, 2px -2px 3px #03c78c, -2px 2px 3px #03c78c,
    2px 2px 3px #03c78c;
  height: fit-content;
}
</style>

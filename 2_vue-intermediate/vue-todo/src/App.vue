<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addOneTodo"></todo-input>
    <todo-list
      v-bind:todoItems="todoItems"
      v-on:removeTodo="removeOneItem"
      v-on:toggleTodo="toggleOneItem"
    ></todo-list>
    <todo-footer v-on:clearItems="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneTodo(todoItem) {
      const itemObj = { completed: false, item: todoItem };
      this.todoItems.push(itemObj);
      localStorage.setItem(todoItem, JSON.stringify(itemObj));
    },
    removeOneItem(todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function () {
      this.todoItems = [];
      localStorage.clear();
    },
  },
  created: function () {
    if (localStorage.length <= 0) return;
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
        this.todoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
};
</script>
<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

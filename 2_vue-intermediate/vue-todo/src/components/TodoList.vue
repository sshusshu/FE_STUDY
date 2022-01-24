<template>
  <div>
    <ul>
      <li v-for="todoItem,index in todoItems" v-bind:key="index">
        <i class="checkBtn fas fa-check" 
           v-bind:class="{checkBtnCompleted:todoItem.completed}" 
           v-on:click="toggleComplete(todoItem,index)">
        </i>
        <span v-bind:class="{textCompleted:todoItem.completed}">
          {{todoItem.item}}
        </span>
        <span class="removeBtn" v-on:click="removeTodoItem(todoItem,index)">
          <i class="fas fa-trash-alt"></i>
        </span>  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['todoItems'],

  methods:{
    removeTodoItem(todoItem, index){
      this.$emit('removeTodo',todoItem,index)
    },
    toggleComplete(todoItem,index){
      this.$emit('toggleTodo',todoItem,index)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: rgb(158, 158, 158);
}
.textCompleted {
  color: rgb(134, 134, 134);
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
<template>
  <div>
    <ul>
      <li v-for="todoItem,index in todoItems" v-bind:key="index">
        <i class="checkBtn fas fa-check" 
           v-bind:class="{checkBtnCompleted:todoItem.completed}" 
           v-on:click="toggleComplete(todoItem)">
        </i>
        <span v-bind:class="{textCompleted:todoItem.completed}">
          {{todoItem.item}}
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
          <i class="fas fa-trash-alt"></i>
        </span>  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todoItems:[]
    }
  },
  created:function(){
    if(localStorage.length>0){
      for(var i =0; i<localStorage.length;i++){
        if(localStorage.key(i) === 'loglevel:webpack-dev-server') return;
        const itemObj = localStorage.getItem(localStorage.key(i))
        this.todoItems.push(JSON.parse(itemObj))
      }
    }
  },
  methods:{
    removeTodo(todoItem, index){
      this.todoItems.splice(index,1)
      localStorage.removeItem(todoItem)
    },
    toggleComplete(todoItem){
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
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
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
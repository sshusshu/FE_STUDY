import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr=[];
        if (localStorage.length <= 0) return;
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
            arr.push(
              JSON.parse(localStorage.getItem(localStorage.key(i)))
            );
          }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state:{
        todoItems:storage.fetch()
    },
    getters:{
       storedTodoItems(state){
         return state.todoItems
       }
    },
    mutations:{
      addOneTodo(state,todoItem) {
        const itemObj = { completed: false, item: todoItem };
        state.todoItems.push(itemObj);
        localStorage.setItem(todoItem, JSON.stringify(itemObj));
      },
      removeOneItem(state,{todoItem,index}) {
        state.todoItems.splice(index, 1);
        localStorage.removeItem(todoItem.item);
      },
      toggleOneItem(state, {todoItem, index}) {
        state.todoItems[index].completed = !state.todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems(state) {
        state.todoItems = [];
        localStorage.clear();
      },
    }
})
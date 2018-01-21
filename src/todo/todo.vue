<template>
  <div class="todo">
      <section>
         <input type="text"
               
                class="todoList"
                placeholder="接下去要做什么"
                autofocus="autofocus"
                @keyup.enter ="addList"
          >
          <item 
          :todo="todo"
            v-for="todo in todos"
            :key="todo.id"
          ></item>
          <Itabs :filter = "filter"></Itabs>
      </section>
    
  </div>
</template>
<script>
import item  from './item.vue'
import Itabs from './tabs.vue'
var id = 0;
    export default{
        components:{
            item,
            Itabs
        },
        data(){
            return {
                
                filter:'all',
                todos:[]
            }
        },
        methods:{
            addList(e){
                this.todos.unshift({
                    id:id++,
                    completed:false,
                    content:e.target.value.trim()
                });
                e.target.value = ''
            }
        }
    }
</script>
<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
      <input 
      type="checkbox"
      class="item"
      v-model="todo.complete"
      >
      <label >{{todo.content}}</label>
      <button class="destroy"@click="destroyItem">x</button>

  </div>
</template>
<script>

    export default{
        props:{
            
            todo:{
                type:Object,
                required:true
            }
        },
        methods:{
            destroyItem(){}
        },
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.todo-item{
    height: 50px;
    line-height: 50px;
}
.completed{
    color:#ddd
}
</style>

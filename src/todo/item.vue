<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
      <input 
      type="checkbox"
      class="item"
      v-model="todo.completed"
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
            destroyItem(){
                this.$emit('del',this.todo.id)//子组件触发事件del，给父组件传值
            }
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
.completed label{
    color:#ddd
}
</style>

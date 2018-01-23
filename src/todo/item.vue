<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
      <input 
      type="checkbox"
      class="item"
      v-model="todo.completed"
      >
      <label >{{todo.content}}</label>
      <button class="destroy" @click="destroyItem">x</button>

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
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    width:80%;
    margin:20px auto;
}
.completed label{
    color:#999;
    text-decoration:line-through;
}
.item{
    margin-right:30px;
}
.destroy{
    float:right;
    border:1px solid #ddd;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    line-height: 20px;
    cursor: pointer;
    color:#666;
    background-color:transparent;
}
.destroy:hover{
    
background-color:#ddd;

}
</style>

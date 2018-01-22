<template>
  <div class="item-helper">
      <span class="left">{{unCompletedLength}} items lefter</span>
        <span class="tabs">
            <span 
            v-for="state in status"
            :key="state"
            :class="['state',filter === state?'active':'']"
            @click="toggerFliter(state)"
            >{{state}}</span>
        </span>
        <span @click="deleteItem"></span>
  </div>
</template>
<script>
    export default{
        props:{
            filter:{
                type:String,
                requried:true
            },
            todos:{
                type:Array,
                requried:true
            }
        },
        data(){
            return {
                status:['all','active','completed'],
                
            }
        },
        computed:{
            unCompletedLength(){
                let unCompleted = this.todos.filter((todo)=>{
                   if(!todo.completed){
                       return todo;
                   }
                });
                return unCompleted.length
            }
        },
        methods:{
            toggerFliter(state){
                this.$emit('tagger',state)
            },
            deleteItem(){}
        }
    }
</script>
<style scoped>
.item-helper span{
    padding: 5px;
    display: inline-block;
}
.state{
    cursor: pointer;
}
.active{
    border: 1px solid #ddd;
}
</style>

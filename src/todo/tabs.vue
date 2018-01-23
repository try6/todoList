<template>
  <div class="item-helper">
      <span class="left"><i>{{unCompletedLength}}</i> items left</span>
        <span class="tabs right">
            <span 
            v-for="state in status"
            :key="state"
            :class="['state',filter === state?'active':'']"
            @click="toggerFliter(state)"
            >{{state}}</span>
        </span>
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

.item-helper{
    position: absolute;
    bottom: 40px;
    left:0;
    right: 0;margin:10px auto;
    font-size: 16px;
}

.item-helper span{
    padding: 6px;
    margin:0 5px;
    
}
.item-helper > span{
    
 margin:0 30px;

}
.left{
    color:#666;
}
.left i {
    color:#dc8c8c;
}
.state{
    cursor: pointer;
}
.active{
    border: 1px solid #dc8c8c;
    border-radius: 8px;
}
</style>

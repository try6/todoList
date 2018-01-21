<template>
  <div class="item-helper">
      <span class="left">2 items lefter</span>
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
                requried:true,
                type:String
            }
        },
        data(){
            return {
                status:['all','active','compeleted']
            }
        },
        methods:{
            toggerFliter(state){},
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

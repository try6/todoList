<template>
  <div class="apple">
  
 
   <div>
     <router-link name="orange">to orange</router-link>
     <router-view></router-view>
   </div>
    <div v-text="msg"></div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      msg: 'I am apple'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

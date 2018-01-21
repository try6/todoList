<template>
  <div class="hello">
    
   <ihead></ihead>

   <div v-text="msg"></div>
   <router-view></router-view>
  </div>
</template>

<script>
import ihead from "./head/headUI";
export default {
  components:{
   ihead
  },
  data () {
    return {
      msg: 'Welcome to Your hello App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

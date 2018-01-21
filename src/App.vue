<template>
  <div id="app">
 
    <iHead></iHead>
    <todo></todo>
    <iFooter></iFooter>
  </div>
</template>
<script>
import iHead from './todo/head.vue'
import todo from './todo/todo.vue'
import iFooter from './todo/Footer.vue'
export default {
  components:{
    iHead,
    todo,
    iFooter
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


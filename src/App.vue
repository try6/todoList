<template>
  <div id="app">
    <div class="mask">
      <img class="bg":src="imgUrl" alt="Im background">
    </div>
      <iHead></iHead>
    <div class="wrap">
      <todo></todo>
      <iFooter></iFooter>
    </div>
  </div>
</template>
<script>
import iHead from './todo/head.vue'
import todo from './todo/todo.vue'
import iFooter from './todo/Footer.vue'

import bgUrl from './img/bg.jpg'
export default {
  components:{
    iHead,
    todo,
    iFooter
  },
  name: 'app',
  data () {
    return {
      imgUrl: bgUrl,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style>
*{
  margin:0;padding: 0;
}
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
 /*  background: url('../img/bg.jpg');
 */}
 

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


#app .mask img{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -999;
  opacity: 0.8;
}

.wrap{
  position: relative;
  margin:  auto;
  background: #fff;
  opacity: 0.8;
  width: 600px;
  border:1px solid #ddd 0.6;
  padding: 20px
}

</style>


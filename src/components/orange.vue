<template>
  <div >
   <router-link to="apple">back</router-link>
   <div v-text="msg">
   </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'I am orange'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

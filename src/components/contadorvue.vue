<template>
  
  <div class="counter">
    <p class="special">֍</p>
    <h2>Counter Game!</h2>

    <p>Contador de clicks:</p> {{count}}
    <p><button class="btn" @click="onClick" @mouseover="hover = true" @mouseleave="hover = false">Clicky</button></p>
  </div>

</template>

<script>
export default {
  name: 'contador-vue',
  data: () => {
    return {
    hover: false
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
    methods: {
      onClick() {
        this.$store.commit('increment')
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.counter {
  position:relative;
  display:inline-block;
  vertical-align: top;
  background-color: #EBECF0;
  margin: 24px;
  padding:10px;
  max-width: 250px;
  border:3px dashed darkslategrey;
  font-size: 16px;
}

.special{
  margin:-2px;
  font-size: 4em;
  color:#AE1100;
}

h2{
  margin:-2px;
  font-size: 1.5em;
  color:#AE1100;
}

p {
  margin: 28px 0 0;
}

.btn{
  margin-top:-30px;
  margin-bottom:1em;
  border-radius:50px;
  padding:12px;
  background-color: #EBECF0;
  text-shadow: 1px 1px 0 white;
  
}
</style>

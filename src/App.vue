<template>
  <div id="app">
    
    <contadorvue />
    <Formulario />     
  
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'
import contadorvue from './components/contadorvue.vue'

export default {
  name: 'App',
  components: {
    Formulario,
    contadorvue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

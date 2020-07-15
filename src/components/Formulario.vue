<template>
  <form action="" v-on:submit="enviar">

    <p class="special">֍</p>
    <!---Agregué required a 2 campos y las funciones de methods de acuerdo a ejemplo de clases--->
    <p>Usuario: 
      <input type="text" class="small" placeholder="Escriba su Nombre" v-model="name" required></p>
    <p>Edad: 
      <input type="number" class="small" placeholder="0" v-model="edad" required></p>
    <p>Dojo de Origen: 
      <select name="Dojo" class="op" placeholder="Seleccione" v-model="origen">
        <option value="USA">Estados Unidos</option>
        <option value="Europa">Europa</option>
        <option value="AmLat">Latinoamérica</option>
        <option value="Africa">África</option>
      </select></p>
    <p>Equipo: 
      <select name="Equipo" class="op" placeholder="Seleccione" v-model="equipo">
        <option value="Azul">Azul</option>
        <option value="Amarillo">Amarillo</option>
        <option value="Morado">Morado</option>
        <option value="Verde">Verde</option>
        </select> </p>
    <p>Lenguaje Preferido: <input type="text" class="small" v-model="lenguaje"></p>
    <p>Domina:
      <input type="radio" class="op" value="html" v-model="maneja" id="1"><label for="1">HTML</label>
      <input type="radio" class="op" value="js" v-model="maneja" id="2"><label for="2">JS</label>
      <input type="radio" class="op" value="python" v-model="maneja" id="3"><label for="3">Python</label>
      <input type="radio" class="op" value="react" v-model="maneja" id="4"><label for="4">React</label>
      <input type="radio" class="op" value="ruby" v-model="maneja" id="5"> <label for="5">Ruby</label></p>
    <p>Introducción:</p><textarea v-model="descripcion" class="small" cols="45" rows="4"></textarea>
    <p><input type="submit" class="btn" v-on:click="enviar"></p>

  </form>
</template>

<script>
export default {
  name: 'Formulario',
  data: () => {
    return {
      name: '',
      edad: '',
      origen:'',
      equipo:'',
      lenguaje:'',
      maneja: '',
      descripcion:''
    }
  },
  methods: {
    enviar: function(ev) {
      ev.preventDefault();
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

form {
  display:inline-block;
  background-color: #EBECF0;
  margin: -20px auto;
  max-width: 560px;
  border:3px dashed darkslategrey;
  font-size: 16px;
}

.special{
  margin:-2px;
  font-size: 4em;
  color:#AE1100;
}

.small {    
  margin: 0px 10px;
  border: 1px solid #bfc0c0;
  background-color:#EBECF0;
  border-radius:200px;
  font-size:16px;
  text-align: center;
  text-shadow: 1px 1px 0 white;
  color:#AE1100
}

.op {
  margin: 0px 10px;
  background-color:#EBECF0;
  font-size:16px;
  text-align: center;
  text-shadow: 1px 1px 0 white;
}

p {
  margin: 28px 0 0;
}

.btn{
  margin-top:-50px;
  margin-bottom:12px;
  border-radius:50px;
  padding:12px;
  background-color: #EBECF0;
  text-shadow: 1px 1px 0 white;
  
}
</style>

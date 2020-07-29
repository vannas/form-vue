export default {
    // estado interno
    state: {
      puntaje1: 60,
      puntaje2: 38
    },
    getPuntajes: function() {
      return [this.puntaje1, this.puntaje2];
    },
    guardarPuntaje1(puntaje) {
      this.puntaje1 = puntaje;
    },
    guardarPuntaje2(puntaje) {
      this.state.puntaje2 = puntaje;
    }
  }
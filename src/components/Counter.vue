<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  //Aquí es posen les properties habitualment. Si no es troben aquí, són atributs.
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      //required: true,
      validator (value) {
        return value >= 0
      }
    },
  },
//  name: 'FirstCompoment'
  data() {
    return{
      //propiety with a value
      counter: this.start
    }
  },
  methods: {
    getSquareValue() { //s'executarà cada cop que es faci la crida des del template
      console.log('getSquareValue')
      return this.counter * this.counter
    },
    increase() {
      this.counter++;

    },
    decrease() {
      this.counter--;
    }
  },
  computed: { //fan més eficient el procès, perquè guarden les propietats en el cache (només es cridarà un cop el mètode)
    squareCounter() {
      console.log('computed squareCounter')
      //només es recalcula quan el counter canvia internament
      return this.counter * this.counter
    },
    customTitle() {
      //return this.title
      //return this.title ? this.title : 'Counter'
      return this.title || 'Counter'
    }
  }
}
</script>


<style scoped>

  button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
  }

</style>
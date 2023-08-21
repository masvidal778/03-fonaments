<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> =  {{ counter * counter }}</p>

  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> =  {{ squareCounter }}</p>
</template>

<script>
export default {
//  name: 'FirstCompoment'
  data() {
    return{
      //propiety with a value
      counter: 5
    }
  },
  methods: {
    getSquareValue() { //s'executarà cada cop que es faci la crida des del template
      console.log('getSquareValue')
      return this.counter * this.counter
    }
  },
  computed: { //fan més eficient el procès, perquè guarden les propietats en el cache (només es cridarà un cop el mètode)
    squareCounter() {
      console.log('computed squareCounter')
      //només es recalcula quan el counter canvia internament
      return this.counter * this.counter
    }
  }
}
</script>


<style scoped>

</style>
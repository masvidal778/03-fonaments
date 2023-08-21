<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> =  {{ counter * counter}}</p>
</template>

<script>
export default {
//  name: 'FirstCompoment'
  data() {
    return{
      //propiety with a value
      counter: 5
    }
  }
}
</script>


<style scoped>

</style>
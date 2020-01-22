<template>
  <h2>Hi Komal component works
  The name is {{ name }}
  My favorite number is {{myFavoriteNumber}}
  And its double is {{doubleOfNumber}}
  <button @click ="increaseFavNumber">Increase Favorite Number</button>
  </h2>
</template>

<script>
export default {
  name: 'Komal',
  data: function() {
      return {
          name: 'Komal RD',
          myFavoriteNumber: 7,
        //   doubleOfNumber: 14
      }
  },
  //Computed will be called only once and doubleOfNumber acts as variable
  // Methos will be executed everytime its called, doubleOfNumber acts as function
  
  computed: {
      doubleOfNumber() {
          return this.myFavoriteNumber * 2;
      }
  },
  methods: {
      increaseFavNumber: function() 
      {
          this.myFavoriteNumber = this.myFavoriteNumber + 1;
          this.doubleOfNumber = this.myFavoriteNumber * 2;
      }
  }
}
</script>

<style>
</style>
<template>
  <main>
       <h1>Your Shopping Cart</h1>
        <button @click="$router.push('checkout')">Proceed to Buy</button>
      <router-view></router-view>
      <Cart></Cart>
  </main>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
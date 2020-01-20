<template>
  <main>
      <h1> Cart Page</h1>
      <router-view></router-view>
      <Cart></Cart>
  </main>
</template>

<script>
import Cart from '@/components/cart/Cart.vue'

export default {
    name:'cart',
    components: {
        Cart
    }
}
</script>

<style>

</style>
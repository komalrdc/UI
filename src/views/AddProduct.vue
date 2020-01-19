<template>
  <div class="home">
    
    <AddProduct msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import AddProduct from '@/components/AddProduct.vue'

export default {
  name: 'AddProduct',
  components: {
    AddProduct
  }
}
</script>

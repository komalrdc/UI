<template>
  <main>
      <h1> Product Description View </h1>
      <router-view></router-view>
      <ProductDescription></ProductDescription>
      </main>
</template>

<script>

import ProductDescription from '@/components/product/ProductDescription.vue'

export default {
    name:'productdescription',
    components: {
        ProductDescription
    }
}
</script>

<style>

</style>
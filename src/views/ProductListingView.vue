<template>
  <main>
      <h1> Product Listing View </h1>
      <ProductListing/>
  </main>
</template>

<script>

import ProductListing from '@/components/product/ProductListing.vue'

export default {
    name:'productlisting',
    components: {
        ProductListing
    }
}
</script>
<style>

</style>
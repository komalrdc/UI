<template>
  <main>
      <h1> Product Listing Page</h1>
      <fieldset>
          <legend> Products </legend>
      </fieldset>
        <router-view></router-view>
      <ProductListing></ProductListing>
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
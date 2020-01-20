<template>
  <main class="products">
      <h1>Product Page</h1>
      <h1>The Category is {{$route.params.id}}</h1>
      <!-- <router-link tag="button" :to="{
          name: 'productdescription',
          params: {
            productdescription: product.title,
          }
        }">
        </router-link> -->
      <router-view></router-view>
      <!-- <ProductDescription></ProductDescription> -->
      </main>
</template>

<script>
//import ProductDescription from '@/components/product/ProductDescription.vue'
// import ProductListingView from '@/views/ProductListingView.vue'
export default {
    name: 'products',
    computed: {
        productId() {
            return this.$route.params.id
        }
    },
    watch: {
        productId: function () {
            this.fetchProductDetails(this.productId)
        }
    },
    methods: {
        fetchProductDetails(id) {
            // Dispatch action to fetch deatils related to one category
            this.$store.dispatch('fetchProductDetails', {
                data: {
                    id,
                    success: this.onSuccess,
                    fail: this.onFail
                }
            })
        },
        onSuccess () {
            // TODO
            // Do somethings...
        },
        onFail () {
            // TODO
            // Show proper erros
        }
    },
    created: function() {
        this.fetchProductDetails(this.productId)
    }
}
</script>

<style>

</style>
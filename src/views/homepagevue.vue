<template>
<main>
    <h1> Product Listing Page</h1>
    <fieldset>
        <legend> Products </legend>       
        <div class="container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt0wRZ7qencbqGT2YvT3DiTYyGNC9-IsM9zWE0haTOPo6UFHps">
    </div>
    <p>Fictional Books</p>
    <div v-for = "product in productList" :key="'product:' + product.id" class="books">
            <div>
                <figure @click="routeToProductDescription(product.id)"> 
                    <img :src = "product.url" height="150px" width="100px">
                </figure>
                <h2>{{product.title}}</h2>
                <h2>{{product.author}}</h2>
                <h2>{{product.price}}</h2>
            </div>
        </div>
        </fieldset>
        <router-view></router-view>
      <ProductListing></ProductListing>
  </main>

</template>

<script>
export default {
    name:'productlisting',
    components: {
        ProductListing
    },
    data (){
        return {
        }
        
    methods: {
        routeToProductDescription (id) {
            this.$router.push({
                name: 'description',
                params: {
                    id
                }
            }) 
        },
        click(){
            let data = {
                id: this.product.id,
                url: this.product.url,
                title: this.product.title,
                author: this.product.author,
                price: this.product.price
            }
            this.$store.dispatch('productDetails', {
                data: data,
                success: function () {
                    window.console.log('Product added successfully...');
                },
                fail: function () {
                    window.console.log('Product added failed...');
                }
            })
        }
        }
    }

}
</script>

<style>

</style>